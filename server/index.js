const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

//Setup
//Enables CORS
app.use(cors());
//Logging
app.use(require('morgan')('dev'));
//body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./images'));

//exposes a directory or a file to a particular URL so it's contents can be publicly accessed
app.use(express.static(path.join(__dirname, 'public')));

//All Routes
app.use(require('./routes'));
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
