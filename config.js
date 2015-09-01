/**
 * Created by Tom on 2015/8/31.
 *
 *
 * APP 配置信息
 */
var app = {
    appport:3000,
    host:'localhost',
    port:'3306',
    user:'',
    password:'',
    database:'',
    logger_path:'./bin/logs/error.log',
    logger_level:'debug'
};

global.Sys = new function(){
    //权限认证
    this.permissionUrls = []

    //管理员权限
    this.adminUrls = []
}
