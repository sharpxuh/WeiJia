var express = require('express');
var router = express.Router();
var userservice = require('../service/userservice');
var filter = require("../utils/filter");

/* GET users listing. */
router.post('/login', function(req, res, next) {
    userservice.findByUsernameAndPassword(req.body.username, req.body.password, function (result) {
        if(result&&result.length>0){
            req.session.user=result;
            res.locals.user = req.session.user;
            res.render('main');
        }else{
            res.render('signin',{message:'用户名或密码错误'});
        }
    });
});

router.get('/logout',function(req,res,next){
    req.session.username="";
    req.session.user="";
    res.redirect("/login");
});

router.get('/sysUser',filter.authorize,function(req,res,next){
    userservice.findAllUsers(function(result){
        res.render('sysUser',{data:result});
    })
});


module.exports = router;
