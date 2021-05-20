//Require necessary dependancies
const express = require('express');
const path = require('path');
const app = express();
const data = require('./data.json');
const port = process.env.port || 3000;

// Confifure view engine to PUG
app.set('view engine', 'pug');

// Configure static folders
app.use('/static', express.static(path.join(__dirname, 'public')));

// Configure URL encoding with express
app.use(express.urlencoded({ extended: false }));

// Routing configuration
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/project', projectRoutes);

// Error handling

app.use((req, res, next) => {
	const err = new Error('Your request was not found!');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	if (err.status === 404) {
		console.log(err.message);
		res.status(404).render('page-not-found', { err });
	} else {
		err.message = 'Sorry! Looks like something went wrong.';
		res.render('error', { err });
	}
});

// Start Server
app.listen(3000, () => {
	console.log(`The app is running on port ${port}`);
});
