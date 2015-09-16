/**
 * Created by Tom on 2015/9/16.
 */
var agent = require('../models/agent');

exports.findAll = function (callback){
    agent.findAll({}).then(function(data){
        if(callback){
            callback(data);
        }
    })
    }