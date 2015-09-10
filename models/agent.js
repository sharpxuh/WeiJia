/**
 * Created by Tom on 2015/9/9.
 */
var Sequelize = require('sequelize');
var sequelize = require("../utils/sequelize.js");
var house = require('house');

var agent = sequelize.define("agent",{
    guid:{type:Sequelize.UUIDV4,primaryKey:true,defaultValue:Sequelize.UUIDV4},
    name:{type:Sequelize.STRING(50)},
    sex:Sequelize.STRING(2),
    status:Sequelize.STRING(2),
    phone:Sequelize.STRING(20),
    desc:Sequelize.STRING(200),
    tel:Sequelize.STRING(20),
    agentid:{type:Sequelize.UUIDV4,defaultValue:Sequelize.UUIDV4}
},{
    timestamps: false,
    freezeTableName: true
});

house.belongsTo(agent);

agent.belongsToMany(house);

module.exports = agent;
