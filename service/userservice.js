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
}