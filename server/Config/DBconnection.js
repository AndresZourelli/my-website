const Pool = require('pg').Pool;

const pool = new Pool({
	user: process.env.POSTGRES_USER,
	host: 'postgres',
	database: process.env.POSTGRES_DB,
	password: process.env.POSTGRES_PASSWORD,
	port: 5432
});
console.log(pool);

const initialize = () => {
	pool.query(
		'CREATE TABLE IF NOT EXISTS projects(id SERIAL PRIMARY KEY, name VARCHAR, description VARCHAR, date TIMESTAMP )',
		(err, res) => {
			if (err) {
				console.log(err);
			}
		}
	);

	pool.query(
		'CREATE TABLE IF NOT EXISTS website_address(web_id SERIAL PRIMARY KEY, website_link VARCHAR,  fk_web_id INTEGER, FOREIGN KEY (fk_web_id) REFERENCES projects (id) ON DELETE CASCADE)',
		(err, res) => {
			if (err) {
				console.log(err);
			}
		}
	);

	pool.query(
		'CREATE TABLE IF NOT EXISTS github_address(github_id SERIAL PRIMARY KEY, github_link VARCHAR,  fk_github_id INTEGER, FOREIGN KEY (fk_github_id) REFERENCES projects (id) ON DELETE CASCADE)',
		(err, res) => {
			if (err) {
				console.log(err);
			}
		}
	);
};

const addProject = (request, response) => {
	const { name, description } = request.body;
	let github, website;
	let id;
	if (request.body.website && request.body.github) {
		github = request.body.github;
		website = request.body.website;

		pool.query(
			'INSERT INTO projects (name,description) VALUES ($1,$2) RETURNING id',
			[ name, description ],
			(error, results) => {
				if (error) {
					throw error;
				}
				id = results.rows[0].id;

				pool.query(
					'INSERT INTO github_address (github_link,fk_github_id) VALUES ($1,$2) ',
					[ github, id ],
					(error, result) => {
						if (error) {
							throw error;
						}
					}
				);

				pool.query(
					'INSERT INTO website_address (website_link,fk_web_id) VALUES ($1,$2)',
					[ website, id ],
					(error, result) => {
						if (error) {
							throw error;
						}
					}
				);
			}
		);
	} else if (request.body.website) {
		website = request.body.website;
		pool.query(
			'INSERT INTO projects (name,description) VALUES ($1,$2) RETURNING id',
			[ name, description ],
			(error, results) => {
				if (error) {
					throw error;
				}
				id = results.rows[0].id;

				pool.query(
					'INSERT INTO website_address (website_link,fk_web_id) VALUES ($1,$2)',
					[ website, id ],
					(error, result) => {
						if (error) {
							throw error;
						}
					}
				);
				response.status(200).send(`Project added with ID: ${id}`);
			}
		);
	} else if (request.body.github) {
		github = request.body.github;
		pool.query(
			'INSERT INTO projects (name,description) VALUES ($1,$2) RETURNING id',
			[ name, description ],
			(error, results) => {
				if (error) {
					throw error;
				}
				id = results.rows[0].id;
				pool.query(
					'INSERT INTO github_address (github_link,fk_github_id) VALUES ($1,$2)',
					[ github, id ],
					(error, result) => {
						if (error) {
							console.log(error);
						}
					}
				);

				response.status(200).send(`Project added with ID: ${id}`);
			}
		);
	} else {
		pool.query(
			'INSERT INTO projects (name,description) VALUES ($1,$2) RETURNING id',
			[ name, description ],
			(error, results) => {
				if (error) {
					throw error;
				}
				id = results.rows[0].id;
				response.status(200).send(`Project added with ID: ${id}`);
			}
		);
	}
};

const getProjects = (request, response) => {
	pool.query(
		'SELECT * FROM projects AS h LEFT JOIN website_address AS web ON h.id = web.fk_web_id LEFT JOIN github_address AS git ON h.id = git.fk_github_id ORDER BY h.id ASC',
		[],
		(error, results) => {
			if (error) {
				throw error;
			}
			response.status(200).json(results.rows);
		}
	);
};

const deleteProject = (request, response) => {
	const { id } = request.body;

	pool.query('DELETE FROM projects WHERE id=$1', [ id ], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).send(`Project deleted with ID: ${id}`);
	});
};

const updateProject = (request, response) => {
	const { id, name, description } = request.body;

	if (request.body.name) {
		pool.query(
			'UPDATE projects SET name=$1, description=$2  WHERE id=$3',
			[ name, description, id ],
			(error, result) => {
				if (error) {
					throw error;
				}
			}
		);
	}
	if (request.body.website) {
		pool.query(
			'INSERT INTO website_address (website_link,fk_web_id, web_id) VALUES ($1,$2,$2)  ON CONFLICT (web_id) DO UPDATE  SET website_link=EXCLUDED.website_link WHERE website_address.fk_web_id=$2',
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
			'INSERT INTO github_address (github_link,fk_github_id,github_id) VALUES ($1,$2,$2) ON CONFLICT (github_id) DO UPDATE SET github_link=$1 WHERE github_address.fk_github_id=$2',
			[ request.body.github, id ],
			(error, result) => {
				if (error) {
					throw error;
				}
			}
		);
	}
	response.status(200).send(`Project updated with ID: ${id}`);
};
module.exports = { pool, deleteProject, getProjects, addProject, updateProject, initialize };
