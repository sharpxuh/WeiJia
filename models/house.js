/**
 * Created by Tom on 2015/9/9.
 */
var Sequelize = require('sequelize');
var sequelize = require("../utils/sequelize.js");
var agent = require('./agent');
var typelist = require("./typelist");

var house = sequelize.define("house",{
    guid:{type:Sequelize.UUID,primaryKey:true,defaultValue:Sequelize.UUIDV4},
    isRent:Sequelize.STRING(1),
    isIn:Sequelize.STRING(1),
    status:Sequelize.STRING(1),
    fitment:Sequelize.STRING(10),
    price:Sequelize.STRING(20),
    title:Sequelize.STRING(100),
    type:Sequelize.STRING(2),
    floor:Sequelize.STRING(10),
    area:Sequelize.STRING(20),
    startdate:Sequelize.STRING(50),
    forward:Sequelize.STRING(10),
    createyear:Sequelize.STRING(10),
    desc:Sequelize.STRING(512),
    address:Sequelize.STRING(100),
    hascarport:Sequelize.STRING(1),
    region:Sequelize.STRING(100),
    createtime:Sequelize.DATE,
    photourl:Sequelize.STRING(400)
},{
    timestamps: false,
    freezeTableName: true
});

house.belongsTo(agent,{foreignKey: 'agentid'});
house.belongsTo(typelist,{foreignKey: 'type'});
//agent.belongsToMany(House, {through: 'AgentHouse'});
//house.sync({force: false});
//house.create({isRent:'1',isIn:'0',status:'1',fitment:'better',price:'3000',title:'title',type:'3室一厅',floor:'11/13',area:'89',startdate:'2015-9-1',forward:'南北朝向',createyear:'2012',desc:'111111',address:'22222',fk_agentid:'15fcccf3-f898-400f-abcb-3acbad293a1b'}).then(function(){});
//House.hasAgent(agent).then(function(data){console.log(data)});
module.exports = house;
