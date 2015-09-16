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
    house.destroy({
        where: {
            guid: guid
        }
    }).then(function(data){
        callback(data);
    });
};

exports.findByGuid = function(guid,callback){
    house.findAll({
        where:{
            guid:guid,
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
}

exports.updateHouseByGuid = function(guid,title,price,createyear,region,agentid,type,area,floor,address,fitment,forword,carport,desc,callback){
    house.update({
        title: title,
        price:price,
        createyear: createyear,
        region:region,
        agentid: agentid,
        type:type,
        area: area,
        floor:floor,
        address: address,
        fitment:fitment,
        forword: forword,
        hascarport:carport,
        desc: desc,
    }, {
        where: {
            guid: guid
        }
    }).then(function(data){
        callback(data);
    }).catch(function(error){
        console.log(error);
    })
}