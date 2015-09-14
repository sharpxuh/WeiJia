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



