/**
 * Created by Tom on 2015/9/24.
 */
var express = require('express');
var router = express.Router();
var houseservice = require('../service/houseservice');
var orderservice = require('../service/orderservice');
var userservice = require('../service/userservice');
var typelistservice = require('../service/typelistservice');
var formidable = require('formidable');
var fs=require("fs");

router.get('/rent',function(req,res,next){
    houseservice.findByIsRent('1', function (result) {
        res.render('mobileHouses', {data: result,rent: true,price:'',area:'',fitment:''});
    })
});

router.get('/second',function(req,res,next){
    houseservice.findByIsRent('0', function (result) {
        res.render('mobileHouses', {data: result,rent: false,price:'',area:'',fitment:''});
    })
});

router.get('/query',function(req,res,next){
    var price='',area='',fitment='';
    if(req.query.price!=""){
        price= req.query.price;
    }
    if(req.query.area!=""){
        area= req.query.area;
        if(area=='0'){
            area={$lt:75};
        }
        if(area=='1'){
            area={$between: [75, 100]};
        }
        if(area=='2'){
            area={$gt:100};
        }
    }
    if(req.query.fitment!=""){
        fitment= req.query.fitment;
    }
    if(req.query.rent=="true"){
        if(price=="0"){
            price={$lt: 3000};
        }
        if(price=="1"){
            price={$gte: 3000};
        }
        houseservice.findByQuery("1",price,area,fitment, function (result) {
            res.render('mobileHouses', {data: result,rent: true,price:req.query.price,area:req.query.area,fitment:fitment});
        })
    }
    if(req.query.rent=="false"){
        if(price=="0"){
            price={$lt: 100};
        }
        if(price=="1"){
            price={$gte: 100};
        }
        houseservice.findByQuery("0",price,area,fitment, function (result) {
            res.render('mobileHouses', {data: result,rent: false,price:req.query.price,area:req.query.area,fitment:fitment});
        })
    }

});


router.get('/detailHouse/:_id', function (req, res, next) {
        houseservice.findByGuid(req.params._id, function (result) {
                res.render('mobileHouseDetail', {data: result});
        })
});

router.get('/sellOut',function(req,res,next){
    typelistservice.findAll(function (result) {
        res.render('mobileSellHouse', {data: result});
    })
});

router.get('/rentOut',function(req,res,next){
    typelistservice.findAll(function (result) {
        res.render('mobileRentHouse', {data: result});
    })
});

router.get('/sellIn',function(req,res,next){
        res.render('mobileSellIn');
});

router.get('/rentIn',function(req,res,next){
    res.render('mobileRentIn');
});

router.get('/introduce',function(req,res,next){
    res.render('mobileIntroduce');
});

router.get('/recruit',function(req,res,next){
    userservice.findRecruit(function(result){
        res.render('mobileRecruit',{data:result});
    })
});

router.post('/upload',function(req,res,next){

    var form = new formidable.IncomingForm();
    form.maxFieldsSize = 20 * 1024 * 1024;
    form.uploadDir='./tmp';
    //form.on('progress', function(bytesReceived, bytesExpected) {
    //    if(bytesExpected>1024*1024*3){//bytesExpected为等待上传的文件的大小，超过大小就返回错手动触发error
    //        this.emit('error',"文件过大")
    //    };
    //});
    var photourl="";
    form.on('file', function(name, file) {
        if(file.size > 0){
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
            fs.renameSync(file.path, uploadDir);
            if(photourl==""||photourl==null){
                photourl=fName;
            }else{
                photourl=photourl+";"+fName;
            }
        }
    });
    form.on('end',function(){
        orderservice.insertOrder(req.query.isrent,req.query.isin,req.query.name,req.query.tel,req.query.address,req.query.type,req.query.floor,req.query.area,photourl,req.query.desc,function(result){
            if(result){
                res.render('successPage', {success: true});
            }
        })
    });
    //出错
    form.on('error',function(err){
        res.render('successPage', {success: false});
    });
    form.parse(req,function(){
    });
});

module.exports = router;

