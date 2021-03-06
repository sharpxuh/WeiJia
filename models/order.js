/**
 * Created by Tom on 2015/9/8.
 */
var Sequelize = require('sequelize');
var sequelize = require("../utils/sequelize.js");
var typelist = require("./typelist");

var order = sequelize.define("order",{
    guid:{type:Sequelize.UUID,primaryKey:true,defaultValue:Sequelize.UUIDV4},
    isrent:Sequelize.STRING(1),
    isin:Sequelize.STRING(1),
    name:Sequelize.STRING(50),
    tel:Sequelize.STRING(50),
    address:Sequelize.STRING(100),
    type:Sequelize.STRING(2),
    floor:Sequelize.STRING(10),
    area:Sequelize.STRING(10),
    photourl:Sequelize.STRING(400),
    status:Sequelize.STRING(1),
    desc:Sequelize.STRING(200),
    createtime:Sequelize.DATE
},{
    timestamps: false,
    freezeTableName: true
});

order.belongsTo(typelist,{foreignKey: 'type'});
//order.sync({force: true});
module.exports = order;



//console.log(([]+{}).length);