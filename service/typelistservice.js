/**
 * Created by Tom on 2015/9/16.
 */
var typelist = require('../models/typelist');

exports.findAll = function (callback){
    typelist.findAll({
    }).then(function(data){
        if(callback){
            callback(data);
        }
    }).catch(function(error){
        console.log(error);
    })
};