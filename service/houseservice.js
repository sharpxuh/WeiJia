/**
 * Created by Tom on 2015/9/10.
 */

var house = require('../models/house');
var agent = require('../models/agent');

exports.findByIsRent = function(isRent,callback){
    house.findAll({
        where:{
            isRent:isRent,
            status:'1'
        }
    }).then(function(data){
        callback(data);
    }).catch(function(error){

    })
}