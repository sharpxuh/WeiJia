var express = require('express');
var router = express.Router();
var houseservice = require('../service/houseservice');
var agentservice = require('../service/agentservice');
var typelistservice = require('../service/typelistservice');
var house = require('../models/house');
var filter = require("../utils/filter");
var formidable = require('formidable');
var fs=require("fs");

router.get('/rentHouse',filter.authorize, function (req, res, next) {

    houseservice.findByIsRent('1', function (result) {
        res.render('rentHouse', {data: result, rent: true});
    })
});

router.get('/secondHouse',filter.authorize, function (req, res, next) {

    houseservice.findByIsRent('0', function (result) {
        res.render('rentHouse', {data: result, rent: false});
    })
});

router.get('/deleteHouse/:_id',filter.authorize, function (req, res, next) {
    houseservice.deleteByGuid(req.params._id, function (result) {
        if (result) {
            res.send({'success': true});
        }else{
            res.send({'success': false});
        }
    })
});

router.post('/updateHouse/:_id',filter.authorize, function (req, res, next) {
    if(req.params._id == "true"){
        houseservice.insertHouse("1","0",req.body.title, req.body.price, req.body.createyear, req.body.region, req.body.agentid, req.body.type, req.body.area, req.body.floor, req.body.address, req.body.fitment, req.body.forward, req.body.carport, req.body.desc,function(result){
            if(result){
                res.send({'success': true});
            }else{
                res.send({'success': false});
            }
        })
    }
   else if(req.params._id == "false"){
        houseservice.insertHouse("0","0",req.body.title, req.body.price, req.body.createyear, req.body.region, req.body.agentid, req.body.type, req.body.area, req.body.floor, req.body.address, req.body.fitment, req.body.forward, req.body.carport, req.body.desc,function(result){
            if(result){
                res.send({'success': true});
            }else{
                res.send({'success': false});
            }
        })
    } else{
        houseservice.updateHouseByGuid(req.params._id, req.body.title, req.body.price, req.body.createyear, req.body.region, req.body.agentid, req.body.type, req.body.area, req.body.floor, req.body.address, req.body.fitment, req.body.forward, req.body.carport, req.body.desc, function (result) {
            if(result){
                res.send({'success': true});
            }else{
                res.send({'success': false});
            }
        })
    }

});

router.get('/detailHouse/:_id',filter.authorize, function (req, res, next) {
    if(req.params._id == "true"||req.params._id == "false"){
        agentservice.findAll(function (agents) {
            typelistservice.findAll(function(typelist){
                res.render('newHouseModal', {rent:req.params._id, agents: agents, typelist:typelist});
            })
        })
    }else {
        houseservice.findByGuid(req.params._id, function (result) {
            agentservice.findAll(function (agents) {
                typelistservice.findAll(function(typelist){
                    res.render('houseModal', {data: result, agents: agents, typelist:typelist});
                })
            })
        })
    }
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
    houseservice.findByGuid(guid, function (result) {
        photourl = result[0].photourl;
    });
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
            var uploadDir = "./public/upload/" + fName;
            fs.rename(file.path, uploadDir,function(){
                if(photourl==""||photourl==null){
                    photourl=fName;
                }else{
                    photourl=photourl+";"+fName;
                }
                houseservice.updatePhotourl(guid,photourl,function(){});
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
