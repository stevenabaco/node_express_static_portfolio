// Require necessary dependancies
const express = require('express');
const router = express.Router();
const data = require('../data.json');
// Extract "projects" objects from data.json
const { projects } = data;


// Projects route based on the "id" of the project
router.get('/:id', (req, res, next) => {
	// Pull "id" from the request parameters
	const { id } = req.params;
	// Pull data from project with matching id
	const projectData = projects[id];
  if (id) {
    res.render('project', {
		project: projectData.project_name,
		description: projectData.description,
		technologies: projectData.technologies,
		images: projectData.image_urls,
		demo: projectData.live_link,
		github: projectData.github_link,
	});
  } else {
    next()
  }
	
});

module.exports = router;
