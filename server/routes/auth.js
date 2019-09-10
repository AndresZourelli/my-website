const jwt = require('express-jwt');
const jwt_token = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const newToken = (user) => {
	return jwt_token.sign({ id: user }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXP
	});
};

const verifyToken = (token) =>
	new Promise((resolve, reject) => {
		jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
			if (err) return reject(err);
			resolve(payload);
		});
	});

const getTokenFromHeaders = (req) => {
	const { headers: { authorization } } = req;
	if (authorization && authorization.split(' ')[0] === 'Bearer') {
		return authorization.split(' ')[1];
	}
	return null;
};

const hashPassword = async (password) => {
	const Mainhash = await bcrypt.hash(password, 10);
	return Mainhash;
};

const comparePassword = async (password, hash) => {
	const match = await bcrypt.compare(password, hash);
	return match;
};

const auth = {
	required: jwt({
		secret: process.env.JWT_SECRET,
		requestProperty: 'auth',
		getToken: getTokenFromHeaders
	}),
	optional: jwt({
		secret: process.env.JWT_SECRET,
		userProperty: 'payload',
		getToken: getTokenFromHeaders,
		credentialsRequired: false
	})
};

module.exports = { auth, newToken, verifyToken, hashPassword, comparePassword };
