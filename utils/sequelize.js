/**
 * Created by Tom on 2015/9/8.
 */
var Sequelize = require('sequelize');

var sequelize = new Sequelize('weijia','root','123',{
    host:'127.0.0.1',
    dialect:'mysql',

    pool:{
        max:10,
        min:0,
        idle:1000
    }
});

module.exports = sequelize;