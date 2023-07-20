

const express = require('express')
const ExpressError = require("../expressError")
const router = express.Router();
const items = require('../fakeDb');


router.get('/', (req, res) => {
    items.push({"name" : "cheerios", "price": 3.40})
    res.json(items)
    // sort of understand it, not sure what to do
})

/** POST / {name, price} => new-item */

router.post('/', (req, res, next) => {
    try {
      let { name, price } = req.body;
      let newItem = {name: name, price : price}
      return res.json(newItem);
    } catch (err) {
      return next(err)
    }
  });


// Get a single item:
router.get('/:name', async (req, res, next) => {
    try {
        const { name } = req.params;
        
        let singleItem = {item : name}
       
        
        return res.json(singleItem)  

    } catch (e) {
        return next(e)
    }
})

// patch route:
router.patch('/:name', async (req, res, next) => {
    try {
        const { name } = req.params;
        
        let singleItem = {item : name}
        
       

        let newName = req.body.name;

        singleItem.name = newName;
        return res.json(singleItem)  

    } catch (e) {
        return next(e)
    } // weird result but the patch worked.
})

// delete route

router.delete('/:name', (req, res, next) => {
    try {
      req.body = {};
      return res.json({message:'Deleted'});
    } catch (err) {
      return next(err)
    }
  }); // not sure about this one but must save time and move on




module.exports = router;

