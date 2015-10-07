/**
 * Created by Tom on 2015/9/16.
 */
var agent = require('../models/agent');

exports.findAll = function (callback){
    agent.findAll({
        where:{
            status:'1'
        }
    }).then(function(data){
        if(callback){
            callback(data);
        }
    }).catch(function(error){
        console.log(error);
    })
};

exports.findByGuid = function (guid,callback){
    agent.findAll({where:{guid:guid}}).then(function(data){
        if(callback){
            callback(data);
        }
    })
};

exports.deleteByGuid = function(guid,callback){
    agent.update({
        status:"0"
    },{
        where: {
            guid: guid
        }
    }).then(function(data){
        callback(data);
    });
};

exports.insertAgent = function(name,sex,phone,tel,desc,callback){
    agent.create({status:"1",name:name,sex:sex,phone:phone,tel:tel,desc:desc}).then(function(data) {
        callback(data);
    }).catch(function(error){
        console.log(error);
    })
};

exports.updateAgentByGuid = function(guid,name,sex,phone,tel,desc,callback){
    agent.update({
        name: name,
        sex:sex,
        phone: phone,
        tel:tel,
        desc: desc
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