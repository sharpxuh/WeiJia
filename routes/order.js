var express = require('express');
var router = express.Router();
var filter = require("../utils/filter");
var order = require('../models/order');
var orderservice = require('../service/orderservice');
var typelistservice = require('../service/typelistservice');

router.get('/rent/:_id',filter.authorize, function (req, res, next) {
  if(req.params._id == "in"){
      orderservice.findRentAndIn("1","1",function(result){
        res.render("orderIn",{data:result,rent:true});
      })
  }
  if(req.params._id == "out"){
      orderservice.findRentAndIn("1","0",function(result){
          res.render("orderOut",{data:result,rent:true});
      })
  }
});

router.get('/second/:_id',filter.authorize, function (req, res, next) {
  if(req.params._id == "in"){
    orderservice.findRentAndIn("0","1",function(result){
      res.render("orderIn",{data:result,rent:true});
    })
  }
  if(req.params._id == "out"){
    orderservice.findRentAndIn("0","0",function(result){
        res.render("orderOut",{data:result,rent:true});
    })
  }
});

router.get('/deleteOrder/:_id',filter.authorize, function (req, res, next) {
  orderservice.deleteByGuid(req.params._id, function (result) {
    if (result) {
      res.send({'success': true});
    }else{
      res.send({'success': false});
    }
  })
});
module.exports = router;
