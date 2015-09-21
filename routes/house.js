var express = require('express');
var router = express.Router();
var houseservice = require('../service/houseservice');
var agentservice = require('../service/agentservice');
var house = require('../models/house');
var filter = require("../utils/filter");

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
        if (result > 0) {
            res.send({'success': true});
        }else{
            res.send({'success': false});
        }
    })
});

router.post('/updateHouse/:_id',filter.authorize, function (req, res, next) {
    if(req.params._id == "true"){
        houseservice.insertHouse("1","1",req.body.title, req.body.price, req.body.createyear, req.body.region, req.body.agentid, req.body.type, req.body.area, req.body.floor, req.body.address, req.body.fitment, req.body.forward, req.body.carport, req.body.desc,function(result){
            if(result){
                res.send({'success': true});
            }else{
                res.send({'success': false});
            }
        })
    }
   else if(req.params._id == "false"){
        houseservice.insertHouse("0","1",req.body.title, req.body.price, req.body.createyear, req.body.region, req.body.agentid, req.body.type, req.body.area, req.body.floor, req.body.address, req.body.fitment, req.body.forward, req.body.carport, req.body.desc,function(result){
            if(result > 0){
                res.send({'success': true});
            }else{
                res.send({'success': false});
            }
        })
    } else{
        houseservice.updateHouseByGuid(req.params._id, req.body.title, req.body.price, req.body.createyear, req.body.region, req.body.agentid, req.body.type, req.body.area, req.body.floor, req.body.address, req.body.fitment, req.body.forward, req.body.carport, req.body.desc, function (result) {
            if(result > 0){
                res.send({'success': true});
            }else{
                res.send({'success': false});
            }
        })
    }

});

router.get('/detailHouse/:_id',filter.authorize, function (req, res, next) {
    if(req.params._id == "true"||req.params._id == "true"){
        agentservice.findAll(function (agents) {
            res.render('newHouseModal', {rent:req.params._id, agents: agents});
        })
    }else {
        houseservice.findByGuid(req.params._id, function (result) {
            agentservice.findAll(function (agents) {
                res.render('houseModal', {data: result, agents: agents});
            })
        })
    }
});


module.exports = router;
