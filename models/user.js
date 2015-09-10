/**
 * Created by Tom on 2015/9/8.
 */
var Sequelize = require('sequelize');
var sequelize = require("../utils/sequelize.js");

var user = sequelize.define("user",{
    guid:{type:Sequelize.UUIDV4,primaryKey:true,defaultValue:Sequelize.UUIDV4},
    username:{type:Sequelize.STRING(50)},
    password:Sequelize.STRING(50),
    status:Sequelize.STRING(1),
    role:Sequelize.STRING(10),
    desc:Sequelize.STRING(200)
},{
    timestamps: false,
    freezeTableName: true
});
module.exports = user;

//var user1 = user.build({
//    username:'tom',
//    password:'111111',
//    status:'1'
//})
//
//user1.save().then(function(res){
//    console.log(res);
//})
//user.sync({force: true}).then(function () {
//    // Table create
//    return user.create({
//        username:'john',
//        password:'111111'
//    })
//});


