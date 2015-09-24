/**
 * Created by Tom on 2015/9/24.
 */
var express = require('express');
var router = express.Router();
var houseservice = require('../service/houseservice');

router.get('/rent',function(req,res,next){
    houseservice.findByIsRent('1', function (result) {
        res.render('mobileHouses', {data: result});
    })
});

module.exports = router;
