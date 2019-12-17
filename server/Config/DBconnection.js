const Pool = require('pg').Pool;

const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT
});

pool.query('CREATE TABLE projects(id SERIAL PRIMARY KEY, name VARCHAR, description VARCHAR)', (err, res) => {
	if (err) {
		console.log(err);
	}
});
pool.query(
	'CREATE TABLE website_address(web_id SERIAL PRIMARY KEY, website_link VARCHAR, CONSTRAINT fk_web_id FOREIGN KEY (web_id) REFERENCES projects (id))',
	(err, res) => {
		if (err) {
			console.log(err);
		}
	}
);
pool.query(
	'CREATE TABLE github_address(github_id SERIAL PRIMARY KEY, github_link VARCHAR, CONSTRAINT fk_github_id FOREIGN KEY (github_id) REFERENCES projects (id))',
	(err, res) => {
		if (err) {
			console.log(err);
		}
	}
);

module.exports = pool;
