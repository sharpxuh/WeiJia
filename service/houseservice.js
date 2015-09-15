/**
 * Created by Tom on 2015/9/10.
 */

var house = require('../models/house');
var agent = require('../models/agent');
var Sequelize = require('sequelize');

exports.findByIsRent = function(isRent,callback){
    house.findAll({
        where:{
            isRent:isRent,
            status:'1'
        },
        include: [{
            model: agent,
            where: { guid: Sequelize.col('house.fk_agentid') }
        }]
    }).then(function(data){
        callback(data);
    }).catch(function(error){
        console.log(error);
    })
};

exports.deleteByGuid = function(guid,callback){
    //house.find({
    //    where:{
    //        guid:guid,
    //    }
    //}).complete(function(err,data){
    //    if(err){
    //        console.log(err);
    //    }else{
    //        data.destory().success(function(err,data){
    //
    //        })
    //    }
    //})
    house.destroy({
        where: {
            guid: guid
        }
    }).then(function(data){
        callback(data);
    });
};