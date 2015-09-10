/**
 * Created by Tom on 2015/9/9.
 */
var Sequelize = require('sequelize');
var sequelize = require("../utils/sequelize.js");

var house = sequelize.define("house",{
    guid:{type:Sequelize.UUIDV4,primaryKey:true,defaultValue:Sequelize.UUIDV4},
    isRent:Sequelize.STRING(1),
    isIn:Sequelize.STRING(1),
    status:Sequelize.STRING(1),
    fitment:Sequelize.STRING(10),
    price:Sequelize.STRING(20),
    title:Sequelize.STRING(100),
    agentid:{type:Sequelize.UUIDV4,defaultValue:Sequelize.UUIDV4},
    type:Sequelize.STRING(10),
    floor:Sequelize.STRING(10),
    area:Sequelize.STRING(20),
    startdate:Sequelize.DATE,
    forward:Sequelize.STRING(10),
    createyear:Sequelize.STRING(10),
    desc:Sequelize.STRING(512),
    address:Sequelize.STRING(100),
    hascarport:Sequelize.STRING(1)
},{
    timestamps: false,
    freezeTableName: true
});

module.exports = house;
