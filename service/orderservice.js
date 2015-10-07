/**
 * Created by Tom on 2015/9/16.
 */
var order = require('../models/order');
var typelist = require("../models/typelist");

exports.insertOrder = function(isrent,isin,name,tel,address,type,floor,area,photourl,desc,callback){
    order.create({isrent:isrent,isin:isin,status:'1',name:name,tel:tel,address:address,type:type,floor:floor,area:area,photourl:photourl,desc:desc}).then(function(data) {
        callback(data);
    }).catch(function(error){
        console.log(error);
    })
};


exports.findRentAndIn = function(isRent,isIn,callback){
    order.findAll({
        where:{
            isRent:isRent,
            isIn:isIn,
            status:'1'
        }, include: [
            typelist
        ],
        order:[['createtime', 'DESC']]
    }).then(function(data){
        callback(data);
    }).catch(function(error){
        console.log(error);
    })
};

exports.deleteByGuid = function(guid,callback){
    order.update({
        status:"0"
    },{
        where: {
            guid: guid
        }
    }).then(function(data){
        callback(data);
    });
};
