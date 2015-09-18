var express = require('express');
var path = require('path');
var fs=require("fs");
var favicon = require('serve-favicon');
var morgan  = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multiparty=require("connect-multiparty");
var session = require("express-session");

global.moment = require('moment');

//var routes = require('./routes/index');
//var users = require('./routes/users');


var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('routes',__dirname + '/routes/');
// uncomment after placing your favicon in /public
//app.use(express.favicon());
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'weijia', cookie: { maxAge: 60000*30 },saveUninitialized:true,resave:true}))
app.use(express.static(path.join(__dirname, 'public')));

//Session
//app.all("*",function(req,res,next){
//
//  var _flag=false;
//  Sys.permissionUrls.forEach(function(r){
//    if(req.session.user==null && req.url.indexOf(r)>-1){
//      _flag=true;
//      return;
//    }
//  });
//  if(_flag){
//    res.redirect("/login");
//  }else{
//    next();
//  }
//})

//route路径处理
var routes=app.get("routes");
fs.readdirSync(routes).forEach(function(fileName) {
  var filePath = routes + fileName;
  var rname=fileName.substr(0,fileName.lastIndexOf("."));
  if(!fs.lstatSync(filePath).isDirectory()) {
    if(rname==="index"){
      app.use("/",require(filePath));
    }else{
      app.use("/"+rname,require(filePath));
    }
  }
});

//app.use('/', routes);
//app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
