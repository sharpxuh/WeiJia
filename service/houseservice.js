/**
 * Created by Tom on 2015/9/10.
 */

var house = require('../models/house');
var agent = require('../models/agent');
var typelist = require("../models/typelist");
var Sequelize = require('sequelize');

exports.findByIsRent = function(isRent,callback){
    house.findAll({
        where:{
            isRent:isRent,
            status:'1'
        },
        include: [
            agent,
            typelist
    ],
        order:[['createtime', 'DESC']]
    }).then(function(data){
        callback(data);
    }).catch(function(error){
        console.log(error);
    })
};

exports.findByQuery = function(isRent,price,area,fitment,callback){
    house.findAll({
        where:{
            isRent:isRent,
            price:price==''?{$gt: 0}:price,
            area:area==''?{$gt: 0}:area,
            fitment:fitment==''?{$like: '%'}:fitment,
            status:'1'
        },
        include: [
            agent,
            typelist
        ],
        order:[['createtime', 'DESC']]
    }).then(function(data){
        callback(data);
    }).catch(function(error){
        console.log(error);
    })
};


//exports.deleteByGuid = function(guid,callback){
//    house.destroy({
//        where: {
//            guid: guid
//        }
//    }).then(function(data){
//        callback(data);
//    });
//};

exports.deleteByGuid = function(guid,callback){
    house.update({
       status:"0"
    },{
        where: {
            guid: guid
        }
    }).then(function(data){
        callback(data);
    });
};

exports.updatePhotourl = function(guid,photourl,callback){
    house.update({
        photourl:photourl
    },{
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
        include: [
            agent,
            typelist
        ],
    }).then(function(data){
        callback(data);
    }).catch(function(error){
        console.log(error);
    })
};

exports.updateHouseByGuid = function(guid,title,price,createyear,region,agentid,type,area,floor,address,fitment,forward,carport,desc,callback){
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
        forward: forward,
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
};

exports.insertHouse = function(isrent,isin,title,price,createyear,region,agentid,type,area,floor,address,fitment,forward,carport,desc,callback){
    house.create({isRent:isrent,isIn:isin,status:"1",title: title, price: price,createyear:createyear,region:region,agentid:agentid,type:type,area:area,floor:floor,address:address,fitment:fitment,forward:forward,carport:carport,desc:desc}).then(function(data) {
        callback(data);
    }).catch(function(error){
        console.log(error);
    })
}



