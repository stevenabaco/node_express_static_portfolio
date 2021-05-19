// Require necessary dependancies
const express = require('express');
const router = express.Router();
// Extract "projects" objects from data.json
const data = require('../data.json');
// Extract "projects" objects from data.json
const { projects } = data;

// "Home" route
router.get('/', (req, res) => {
	res.render('index', {
		projects: projects,
	});
});

// "About" route
router.get('/about', (req, res) => {
  
  res.render('about');
});

module.exports = router;
