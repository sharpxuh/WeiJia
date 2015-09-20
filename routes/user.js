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

router.get('/deleteUser/:_id',filter.authorize, function (req, res, next) {
    userservice.deleteByGuid(req.params._id, function (result) {
        if (result > 0) {
            res.send({'success': true});
        }else{
            res.send({'success': false});
        }
    })
});

router.get('/detailUser/:_id',filter.authorize, function (req, res, next) {
    userservice.findByGuid(req.params._id, function (result) {
        res.render('userModal',{data:result});
    })
});

router.post('/updateUser/:_id',filter.authorize, function (req, res, next) {
    userservice.updateUserByGuid(req.params._id,req.body.username,req.body.password,req.body.name,req.body.admin,req.body.desc,function(result){
        if(result > 0){
            res.send({'success': true});
        }else{
            res.send({'success': false});
        }
    })
});

module.exports = router;
