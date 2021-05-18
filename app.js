//Require necessary dependancies
const express = require('express');
const path = require('path');
const app = express();
const data = require('./data.json');
//Setup middleware
app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));
