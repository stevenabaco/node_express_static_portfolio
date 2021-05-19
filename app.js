//Require necessary dependancies
const express = require('express');
const path = require('path');
const app = express();
const data = require('./data.json');
const port = 3000

// Middleware configutration
app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));

// Routing configuration
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/project', projectRoutes);

app.listen(3000, () => {
  console.log(`The app is running on port ${port}`);
})