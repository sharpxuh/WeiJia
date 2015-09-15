/**
 * Created by Tom on 2015/9/9.
 */
var Sequelize = require('sequelize');
var sequelize = require("../utils/sequelize.js");

var agent = sequelize.define("agent",{
    guid:{type:Sequelize.UUID,primaryKey:true,defaultValue:Sequelize.UUIDV4},
    name:Sequelize.STRING(50),
    sex:Sequelize.STRING(2),
    status:Sequelize.STRING(2),
    phone:Sequelize.STRING(20),
    desc:Sequelize.STRING(200),
    tel:Sequelize.STRING(20),
},{
    timestamps: false,
    freezeTableName: true
});

//agent.sync({force: true});
//agent.create({name:'han',sex:'0',status:'1',phone:'15860556688',desc:'this is desc!',tel:'66056888'}).then(function(){});
module.exports = agent;
