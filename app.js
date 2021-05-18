//Require necessary dependancies
const express = require('express');
const path = require('path');
const app = express();
const data = require('./data.json');
const port = 3000
//Setup middleware
app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));






app.listen(3000, () => {
  console.log(`The app is running on port ${port}`);
})