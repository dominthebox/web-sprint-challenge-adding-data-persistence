// build your `/api/tasks` router here
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json('getting the tasks')
});

router.post('/', (req, res, next) => {
    res.json('posting a task')
});

router.use((err, req, res,  next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: 'Something went wrong in the tasks router',
        message: err.message,
        stack: err.stack,
    })
});

module.exports = router;
