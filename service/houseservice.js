/**
 * Created by Tom on 2015/9/10.
 */

var house = require('../models/house');

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