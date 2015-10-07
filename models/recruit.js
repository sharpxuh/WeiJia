/**
 * Created by Tom on 2015/9/9.
 */
var Sequelize = require('sequelize');
var sequelize = require("../utils/sequelize.js");

var recruit = sequelize.define("recruit",{
    guid:{type:Sequelize.UUID,primaryKey:true,defaultValue:Sequelize.UUIDV4},
    duty:Sequelize.STRING(400),
    require:Sequelize.STRING(400),
    number:Sequelize.STRING(10),
},{
    timestamps: false,
    freezeTableName: true
});

//recruit.sync({force: true});
//agent.create({name:'han',sex:'0',status:'1',phone:'15860556688',desc:'this is desc!',tel:'66056888'}).then(function(){});
module.exports = recruit;
