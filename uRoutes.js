const express = require('express');

const router = new express.Router();

const TEST = [{name: 'test123'}]
router.get('/', (req, res) => {
    res.json({name : TEST})
})

module.exports = router;