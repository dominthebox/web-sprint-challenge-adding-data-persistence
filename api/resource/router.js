// build your `/api/resources` router here
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json('getting the resources')
})
router.post('/', (req, res, next) => {
    res.json('posting a resource')
})

router.use((err, req, res,  next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        sageAdvice: 'Finding the real error is 90% of the bug fix',
        message: err.message,
        stack: err.stack,
    })
});

module.exports = router;