/**
 * Created by Tom on 2015/9/9.
 */
var user = require('../models/user');

exports.findByUsernameAndPassword = function (username,password,callback){
    user.findAll({where:{username:username,password:password}}).then(function(data){
        if(callback){
            callback(data);
        }
    })
};

exports.findByGuid = function (guid,callback){
    user.findAll({where:{guid:guid}}).then(function(data){
        if(callback){
            callback(data);
        }
    })
};

exports.findAllUsers = function (callback){
    user.findAll({
        where:{
            status:'1'
        }

    }).then(function(data){
        if(callback){
            callback(data);
        }
    })
};

exports.deleteByGuid = function(guid,callback){
    user.update({
        status:"0"
    },{
        where: {
            guid: guid
        }
    }).then(function(data){
        callback(data);
    });
};

exports.updateUserByGuid = function(guid,username,password,name,admin,desc,callback){
    user.update({
        username: username,
        password:password,
        name: name,
        role:admin,
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
};

exports.insertUser = function(username,password,name,admin,desc,callback){
    user.create({status:"1",username:username,password:password,name:name,role:admin,desc:desc}).then(function(data) {
        callback(data);
    }).catch(function(error){
        console.log(error);
    })
}