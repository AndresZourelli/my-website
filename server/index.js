const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('./Config/DBconnection');
require('dotenv').config();

db.initialize();
//Setup
//Enables CORS
app.use(cors());
//Logging
app.use(require('morgan')('dev'));
//body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//exposes a directory or a file to a particular URL so it's contents can be publicly accessed
app.use(express.static(path.join(__dirname, 'public')));

const port = 5000;

//get all projects
app.get('/api/projects', db.getProjects);
//create new project
app.post('/api/projects', db.addProject);
//update existing project
app.post('/api/projects/update', db.updateProject);
//delete project
app.post('/api/projects/delete', db.deleteProject);

app.get('/test', () => console.log('working'));
// app.get('/', () => db.getProjects);

app.listen(port, () => console.log(`Server started on port ${port}`));
