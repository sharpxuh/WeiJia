var express = require('express');
var router = express.Router();
var userservice = require('../service/userservice');
var agentservice = require('../service/agentservice');
var filter = require("../utils/filter");
var formidable = require('formidable');
var fs=require("fs");

/* GET users listing. */
router.post('/login',function(req, res, next) {
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

router.get('/agent',filter.authorize,function(req,res,next){
    agentservice.findAll(function(result){
        res.render('agent',{data:result});
    })
});

router.get('/deleteUser/:_id',filter.authorize, function (req, res, next) {
    userservice.deleteByGuid(req.params._id, function (result) {
        if (result) {
            res.send({'success': true});
        }else{
            res.send({'success': false});
        }
    })
});

router.get('/deleteAgent/:_id',filter.authorize, function (req, res, next) {
    agentservice.deleteByGuid(req.params._id, function (result) {
        if (result) {
            res.send({'success': true});
        }else{
            res.send({'success': false});
        }
    })
});

router.get('/detailUser/:_id',filter.authorize, function (req, res, next) {
    if(req.params._id=="new"){
        res.render('newUserModal');
    }else{
        userservice.findByGuid(req.params._id, function (result) {
            res.render('userModal',{data:result});
        })
    }
});

router.get('/detailAgent/:_id',filter.authorize, function (req, res, next) {
    if(req.params._id=="new"){
        res.render('newAgentModal');
    }else{
        agentservice.findByGuid(req.params._id, function (result) {
            res.render('agentModal',{data:result});
        })
    }
});

router.post('/updateUser/:_id',filter.authorize, function (req, res, next) {
    if(req.params._id == "new"){
        userservice.insertUser(req.body.username,req.body.password,req.body.name,req.body.admin,req.body.desc,function(result){
            if(result){
                res.send({'success': true});
            }else{
                res.send({'success': false});
            }
        })
    }else{
        userservice.updateUserByGuid(req.params._id,req.body.username,req.body.password,req.body.name,req.body.admin,req.body.desc,function(result){
            if(result){
                res.send({'success': true});
            }else{
                res.send({'success': false});
            }
        })
    }
});

router.post('/updateAgent/:_id',filter.authorize, function (req, res, next) {
    if(req.params._id == "new"){
        agentservice.insertAgent(req.body.name,req.body.sex,req.body.phone,req.body.tel,req.body.desc,function(result){
            if(result){
                res.send({'success': true});
            }else{
                res.send({'success': false});
            }
        })
    }else{
        agentservice.updateAgentByGuid(req.params._id,req.body.name,req.body.sex,req.body.phone,req.body.tel,req.body.desc,function(result){
            if(result){
                res.send({'success': true});
            }else{
                res.send({'success': false});
            }
        })
    }
});

router.get('/recruit',filter.authorize,function(req,res,next){
    userservice.findRecruit(function(result){
        res.render('recruit',{data:result});
    })
});

router.post('/updateRecruit/:_id',filter.authorize, function (req, res, next) {
        userservice.updateRecruitByGuid(req.params._id,req.query.duty,req.query.require,req.query.number,req.query.email,req.query.tel,function(result){
            if(result){
                res.send({'success': true});
            }else{
                res.send({'success': false});
            }
        })
});

router.get('/upload/:_id', function(req, res) {
    res.render('uploadModal', {data:req.params._id});
});


router.post('/uploadfiles/:_id', function(req, res) {
    var guid = req.params._id;
    var form = new formidable.IncomingForm();
    form.maxFieldsSize = 20 * 1024 * 1024;
    form.uploadDir='./tmp';

    res.header( 'Content-Type','text/javascript;charset=utf-8');
    //form.on('progress', function(bytesReceived, bytesExpected) {
    //    if(bytesExpected>1024*1024*3){//bytesExpected为等待上传的文件的大小，超过大小就返回错手动触发error
    //        this.emit('error',"文件过大")
    //    };
    //});
    var photourl="";

    form.on('file', function(name, file) {
        var fName = (new Date()).getTime();
        switch (file.type){
            case "image/jpeg":
                fName = fName + ".jpg";
                break;
            case "image/png":
                fName = fName + ".png";
                break;
            default :
                fName =fName + ".png";
                break;
        }
        var uploadDir = "./public/images/" + fName;
        fs.rename(file.path, uploadDir,function(){
            agentservice.updatePhotourl(guid,fName,function(){});
        });

    });

    form.on('end',function(){
        res.send({'success': true});
    });
    //出错
    form.on('error',function(err){
        res.end("上传失败");
    });
    form.parse(req,function(){
    });
});

module.exports = router;
