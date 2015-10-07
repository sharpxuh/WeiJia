/**
 * Created by Tom on 2015/9/9.
 */
var Sequelize = require('sequelize');
var sequelize = require("../utils/sequelize.js");

var typelist = sequelize.define("typelist",{
    typeid:{type:Sequelize.STRING(2),primaryKey:true},
    label:Sequelize.STRING(20)
},{
    timestamps: false,
    freezeTableName: true
});

//typelist.sync({force: true});
//agent.create({name:'han',sex:'0',status:'1',phone:'15860556688',desc:'this is desc!',tel:'66056888'}).then(function(){});
module.exports = typelist;
