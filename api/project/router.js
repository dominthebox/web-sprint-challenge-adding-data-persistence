// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.findProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    const project = req.body

    Projects.addProject(project)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
});

router.use((err, req, res,  next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: 'Something went wrong in the project router',
        message: err.message,
        stack: err.stack,
    })
});

module.exports = router;
