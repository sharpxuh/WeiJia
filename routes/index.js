var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/login');
});

router.get('/login',function(req,res,next){
  res.render('signin',{message:false});
})
module.exports = router;
