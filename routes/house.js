var express = require('express');
var router = express.Router();


router.get('/rentHouse',function(req,res,next){
  res.render('rentHouse');
});

module.exports = router;
