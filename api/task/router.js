// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model')
const router = express.Router();

router.get('/', (req, res, next) => {
    Tasks.findTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    const task = req.body

    Tasks.addTask(task)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(next)
});

router.use((err, req, res,  next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: 'Something went wrong in the tasks router',
        message: err.message,
        stack: err.stack,
    })
});

module.exports = router;
