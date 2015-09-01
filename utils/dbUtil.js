/**
 * Created by Tom on 2015/8/31.
 *
 * MySQL Model
 */

var mq = require("mysql");
var logger = require("./logger");
var util = require('util');
var config = require("../config.js");
var uuid = require("node-uuid");
var pool = null;
var db = null;

function Table(tablename,util,fields){
    this.tablename=tablename;
    this.pool=util.pool;
    this.fields=fields;
}

//检查表字段
Table.prototype.checkTable=function(values){
    if(values && this.fields){
        var flag=false;
        this.fields.forEach(function(r){
            for(var prop in values){
                if(r===prop|| r.name===prop){
                    flag=true;
                }
            }
            if(!flag){
                return false;
            }
        });
    }
    return true;
}
//clear表字段
Table.prototype.clearTable=function(values){
    if(values && this.fields){
        for(var prop in values){
            var flag=false;
            for(var i=0;i<this.fields.length;i++){
                var r=this.fields[i];
                if(r===prop||r.name===prop){
                    flag=true;
                    break;
                }
            }
            if(!flag && prop!=null){
                console.error("-not match property-"+prop);
                delete values[prop];
            }
        }
    }
    return true;
}


Table.prototype.getConnection = function(callback){
    if(!callback){
        callback = function(){};
    }
    this.pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }
        callback(connection);
    })
}

//save
Table.prototype.insert = function(values, callback) {
    if(!callback){
        callback=function(){};
    }
    var me=this;
    if (this.clearTable(values)) {
        if(typeof values["id_"]=='underfined'||values["id_"]==null || values["id_"]===""){
            values["id_"]=uuid.v1();
        }
        this.getConnection(function(connection) {
            var query = connection.query("insert into " + me.tablename + " set ?", values, function(err, result) {
                if (err) {
                    callback(err,null);
                }else{
                    callback(null,values["id_"]);//TODO　返回生成ＩＤ
                }
                connection.release(); //release
            });
            logger.debug(query.sql);
        })
    }
};

//get_返回空为错误
Table.prototype.get = function(ID, callback) {
    if(!callback){
        callback=function(){};
    }
    var me=this;
    if (ID != null && ID != "") {
        this.getConnection(function(connection) {
            var query = connection.query("select * from " + me.tablename + " where id_=?", ID, function(err, result) {
                if (err || result.length<1) {
                    callback(err,result);
                }else{
                    callback(null,result[0]);
                }
                connection.release(); //release
            });
            logger.debug(query.sql);
        });
    }
};

//update
Table.prototype.update = function(values, callback) {
    if(!callback){
        callback=function(){};
    }
    var me=this;
    if (this.clearTable(values)) {
        this.getConnection(function(connection) {
            var query = connection.query("update  " + me.tablename + " set ? where id_=" + connection.escape(values.id_), values, function(err, result) {
                if (err) {
                    callback(err,result);
                }else{
                    callback(null,result);
                }
                connection.release(); //release
            });
            logger.debug(query.sql);
        });
    }
};

//delete
Table.prototype.remove = function(ID, callback) {
    if(!callback){
        callback=function(){};
    }
    var me=this;
    if (ID != null && ID != "") {
        this.getConnection(function(connection) {
            var query = connection.query("delete  from  " + me.tablename + "  where id_=?", ID, function(err, result) {
                if (err) {
                    callback(err,result);
                }else{
                    callback(null,result);
                }
                connection.release(); //release
            });
            logger.debug(query.sql);
        });
    }
}

//exists
Table.prototype.exists = function(tablename, callback) {
    if(!callback){
        callback=function(){};
    }
    if (tablename) {
        this.getConnection(function(connection) {
            var sql = "select table_name from information_schema.tables where table_schema='" + config_.database + "' and table_name='" + tablename + "'";
            var query = connection.query(sql, function(err, result) {
                if (err) {
                    callback(err,result);
                }else{
                    callback(null,result);
                }
                connection.release(); //release
            });
            logger.debug(query.sql);
        });
    }
}

//clear
Table.prototype.clear = function(tablename, callback) {
    if(!callback){
        callback=function(){};
    }
    if (tablename) {
        this.getConnection(function(connection) {
            var sql = "TRUNCATE TABLE " + tablename;
            var query = connection.query(sql, function(err, result) {
                if (err) {
                    callback(err,result);
                }else{
                    callback(null,result);
                }
                connection.release(); //release
            });
            logger.debug(query.sql);
        });
    }
}

//count
Table.prototype.count = function(callback) {
    if(!callback){
        callback=function(){};
    }
    var me=this;
    this.getConnection(function(connection) {
        var query = connection.query("select count(*) as count from " + me.tablename, function(err, result) {
            if (err) {
                callback(err,result);
            }else{
                callback(null,result[0].count);
            }
            connection.release(); //release
        });
        logger.debug(query.sql);
    });
}
Table.prototype.countBySql = function(sql, p,callback) {
    if((typeof p == 'function') && p.constructor == Function){
        callback=p;
    }else{
        if (p) {
            for (var i=0;i<p.length;i++) {
                sql=sql.replace("?",this.pool.escape(p[i]));
            }
        }
    }
    if(!callback){
        callback=function(){};
    }
    this.getConnection(function(connection) {
        var query = connection.query("select count(*) as count from ( " + sql + " ) T", function(err, result) {
            if (err) {
                callback(err,result);
            }else{
                callback(null,result[0].count);
            }
            connection.release(); //release
        });
        logger.debug(query.sql);
    });
}

//query
Table.prototype.where = function(params, callback) {
    if(!callback){
        callback=function(){};
    }
    var sql = "select * from " + this.tablename + " where 1=1";
    if (this.clearTable(params)) {
        for (var pro in params) {
            sql += " and " + pro + "=" + this.pool.escape(params[pro]);
        }
    }

    this.getConnection(function(connection) {
        var query = connection.query(sql, function(err, result) {
            if (err) {
                callback(err,result);
            }else{
                callback(null,result);
            }
            connection.release(); //release
        });
        logger.debug(query.sql);
    });
}