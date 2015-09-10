/**
 * Created by Tom on 2015/9/8.
 */
var Sequelize = require('sequelize');

var sequelize = new Sequelize('weijia','root','123',{
    host:'localhost',
    dialect:'mysql',

    pool:{
        max:10,
        min:0,
        idle:1000
    }
});

module.exports = sequelize;