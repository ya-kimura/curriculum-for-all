const express = require('express')
const router = express.Router()
const curriculoController = require('../controller/curriculo-constroller')

router.get('/curriculo', (req,res, next) => {  
    const curriculoData = curriculoController.getData()     
    
    res.render('curriculo', curriculoData)
})

module.exports = router