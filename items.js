const items = require("./fakeDb")
const express = require('express');

const router = new express.Router();

router.get('/', (req, res) => {
    items.push({"name" : "cheerios", "price": 3.40})
    res.json(items)
})





console.log(items)

module.exports = router;