/**
 * Created by Tom on 2015/8/31.
 *
 *
 * APP ������Ϣ
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
    //Ȩ����֤
    this.permissionUrls = []

    //����ԱȨ��
    this.adminUrls = []
}
