const router = require('express').Router();
const auth = require('../auth').auth;
const jwtNew = require('../auth').newToken;
// const pool = require('../../Config/DBqueries');
// const emailSend = require('../../Email/email');
const hashPassword = require('../auth').hashPassword;
const comparePassword = require('../auth').comparePassword;
// const query_functions = require('../../Utilities/query_functions.js');
const multer = require('multer');

//Setup
//Set Storage Engine
const storage = multer.diskStorage({
	destination: './images',
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

//Init Upload
const upload = multer({
	storage: storage
}).single('projectImage');

router.post('/upload', (req, res, next) => {
	upload(req, res, (err) => {
		if (err) {
			return res.status(400).send({ msg: err });
		} else {
			if (req.file == undefined) {
				return res.status(400).send({ msg: 'Error: No File Selected' });
			} else {
				return res.status(200).send({
					msg: 'File Uploaded',
					file: `images/${req.file.filename}`
				});
			}
		}
	});
});

router.post('/login', auth.optional, (req, res, next) => {
	const { userName, password } = req.body;

	if (!userName || !password) {
		return res.status(400).send({ message: 'User name and Password Required' });
	}
	try {
		pool.query(
			'SELECT "userName","password","id" FROM SuitUp.login_info WHERE "userName" = $1 AND "isEmailConfirmed"=true;',
			[ userName ],
			async (error, result) => {
				if (error) {
					console.error(error);
					return res.status(400).end();
				}
				const db_pass = result.rows[0].password;
				const match = await comparePassword(password, db_pass);
				if (match) {
					const token = jwtNew(result.rows[0].id);
					return res.status(200).send({ message: 'Successful Login', token });
				}

				return res.status(400).end();
			}
		);
	} catch (e) {
		console.error(e);
		return res.status(400).end();
	}
	console.log('You have loged in');
});

module.exports = router;
