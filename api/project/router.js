// build your `/api/projects` router here
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json('getting the projects')
});

router.post('/', (req, res, next) => {
    res.json('posting a project')
});

router.use((err, req, res,  next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: 'Something went wrong in the project router',
        message: err.message,
        stack: err.stack,
    })
});

module.exports = router;
