/**
 * Created by Tom on 2015/8/31.
 *
 *
 */
var app = {
    appport:3000,
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123',
    database:'weijia',
    logger_path:'./bin/logs/error.log',
    logger_level:'debug'
};

global.Sys = new function(){

    this.permissionUrls = []


    this.adminUrls = []
}
