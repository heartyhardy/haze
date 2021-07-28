const express = require('express')
const router = express.Router()

const {asyncWrapper} = require('./wrapper')

// Route handlders

router.get('/', asyncWrapper(async(req, res, next) =>{
    res.json({message: "HAZE"})
}))

module.exports = router