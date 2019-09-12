const nodemailer = require('nodemailer');

const sendContactFrom = (req, email, name, message, callback) => {
	var transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		auth: {
			user: process.env.MY_EMAIL_ACCOUNT,
			pass: process.env.MY_EMAIL_PASSWORD
		}
	});

	var mailOptions = {
		from: 'azourelli@gmail.com',
		to: email,
		subject: `Someone sent you a message!`,
		text: `Message from ${name}:
            ${message}`
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			callback(error);
		} else {
			callback(null, { succes: 'Email sent: ' + info.response });
		}
	});
};

module.exports = { sendContactFrom };
