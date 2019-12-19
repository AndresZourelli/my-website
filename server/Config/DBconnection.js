const Pool = require('pg').Pool;

const pool = new Pool({
	user: process.env.POSTGRES_USER,
	host: localhost,
	database: process.env.POSTGRES_DB,
	password: process.env.POSTGRES_PASSWORD,
	port: 27017
});

pool.query(
	'CREATE TABLE projects(id SERIAL PRIMARY KEY, name VARCHAR, description VARCHAR, date TIMESTAMP )',
	(err, res) => {
		if (err) {
			console.log(err);
		}
	}
);
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

const addProject = (request, response) => {
	const { name, description } = request.body;
	let github, website;
	let id;
	if (request.body.website && request.body.github) {
		github = request.body.github;
		website = request.body.website;

		pool.query(
			'INSERT INTO projects (name,description) VALUES ($1,$2)',
			[ name, description ],
			(error, results) => {
				if (error) {
					throw error;
				}
				id = results.insertId;
				response.status(200).send(`Project added with ID: ${results.insertId}`);

				pool.query(
					'INSERT INTO github_address (github_link,fk_github_id) VALUES ($1,$2)',
					[ github, id ],
					(error, result) => {
						if (error) {
							throw error;
						}
						response.status(200).send(`Github address added with ID: ${results.insertId}`);
					}
				);

				pool.query(
					'INSERT INTO website_address (website_link,fk_web_id) VALUES ($1,$2)',
					[ website, id ],
					(error, result) => {
						if (error) {
							throw error;
						}
						response.status(200).send(`Website address added with ID: ${results.insertId}`);
					}
				);
			}
		);
	} else if (request.body.website) {
		website = request.body.website;
		pool.query(
			'INSERT INTO projects (name,description) VALUES ($1,$2,$3)',
			[ name, description, website ],
			(error, results) => {
				if (error) {
					throw error;
				}
				id = results.insertId;
				pool.query(
					'INSERT INTO website_address (website_link,fk_web_id) VALUES ($1,$2)',
					[ website, id ],
					(error, result) => {
						if (error) {
							throw error;
						}
					}
				);
				response.status(200).send(`Project added with ID: ${results.insertId}`);
			}
		);
	} else if (request.body.github) {
		github = request.body.github;
		pool.query(
			'INSERT INTO projects (name,description) VALUES ($1,$2,$3)',
			[ name, description, github ],
			(error, results) => {
				if (error) {
					throw error;
				}
				id = results.insertId;
				pool.query(
					'INSERT INTO github_address (github_link,fk_github_id) VALUES ($1,$2)',
					[ github, id ],
					(error, result) => {
						if (error) {
							throw error;
						}
					}
				);
				response.status(200).send(`Project added with ID: ${results.insertId}`);
			}
		);
	} else {
		pool.query(
			'INSERT INTO projects (name,description) VALUES ($1,$2)',
			[ name, description ],
			(error, results) => {
				if (error) {
					throw error;
				}
				response.status(200).send(`Project added with ID: ${results.insertId}`);
			}
		);
	}
};

const getProjects = (request, response) => {
	pool.query(
		'SELECT * FROM projects AS h LEFT JOIN website_address AS web ON h.id = web.web_id LEFT JOIN github_address AS git ON h.id = git.github_id ORDER BY h.id ASC'
	);
};

const deleteProject = (request, response) => {
	const id = pardeInt(request.params.id);

	pool.query('DELETE FROM projects WHERE id=$1', [ id ], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).send(`Project deleted with ID: ${id}`);
	});
};

const updateProject = (request, response) => {
	const { id } = request.body;

	if (request.body.name) {
		pool.query('UPDATE projects SET name=$1 WHERE id=$2', [ request.body.name, id ], (error, result) => {
			if (error) {
				throw error;
			}
		});
	}
	if (request.body.description) {
		pool.query(
			'UPDATE projects SET description=$1 WHERE id=$2',
			[ request.body.description, id ],
			(error, result) => {
				if (error) {
					throw error;
				}
			}
		);
	}
	if (request.body.website) {
		pool.query(
			'UPDATE website_address SET website_link=$1 WHERE fk_web_id=$2',
			[ request.body.website, id ],
			(error, result) => {
				if (error) {
					throw error;
				}
			}
		);
	}
	if (request.body.github) {
		pool.query(
			'UPDATE github_address SET github_link=$1 WHERE fk_github_id=$2',
			[ request.body.github, id ],
			(error, result) => {
				if (error) {
					throw error;
				}
			}
		);
	}
};
module.exports = { pool, deleteProject, getProjects, addProject, updateProject };
