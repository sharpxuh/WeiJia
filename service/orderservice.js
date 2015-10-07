/**
 * Created by Tom on 2015/9/16.
 */
var order = require('../models/order');

exports.insertOrder = function(isrent,isin,name,tel,address,type,floor,area,photourl,desc,callback){
    order.create({isrent:isrent,isin:isin,name:name,tel:tel,address:address,type:type,floor:floor,area:area,photourl:photourl,desc:desc}).then(function(data) {
        callback(data);
    }).catch(function(error){
        console.log(error);
    })
};
