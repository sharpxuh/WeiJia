var express = require('express');
var router = express.Router();
var houseservice = require('../service/houseservice');
var agentservice = require('../service/agentservice');
var house = require('../models/house');

router.get('/rentHouse', function (req, res, next) {

    houseservice.findByIsRent('1', function (result) {
        res.render('rentHouse', {data: result, rent: true});
    })
});

router.get('/secondHouse', function (req, res, next) {

    houseservice.findByIsRent('0', function (result) {
        res.render('rentHouse', {data: result, rent: false});
    })
});

router.get('/deleteHouse/:_id', function (req, res, next) {
    houseservice.deleteByGuid(req.params._id, function (result) {
        if (result > 0) {
            res.send({'success': true});
        }
    })
});

router.post('/updateHouse/:_id', function (req, res, next) {
    houseservice.updateHouseByGuid(req.params._id, req.body.title, req.body.price, req.body.createyear, req.body.region, req.body.agentSelect, req.body.type, req.body.area, req.body.floor, req.body.address, req.body.fitment, req.body.forward, req.body.carport, req.body.desc, function (result) {
        console.log(result);
    })
})

router.get('/detailHouse/:_id', function (req, res, next) {
    houseservice.findByGuid(req.params._id, function (result) {
        agentservice.findAll(function (agents) {
            res.render('editHouse', {data: result, agents: agents});
        })
    })
})

module.exports = router;
