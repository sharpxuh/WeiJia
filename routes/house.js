var express = require('express');
var router = express.Router();
var houseservice = require('../service/houseservice');

router.get('/rentHouse',function(req,res,next){

  houseservice.findByIsRent('1',function(result){
    res.render('rentHouse',{data:result,rent:true});
  })
});

router.get('/secondHouse',function(req,res,next){

  houseservice.findByIsRent('0',function(result){
    res.render('rentHouse',{data:result,rent:false});
  })
});

module.exports = router;
