var express = require('express');
var router = express.Router();
var userservice = require('../service/userservice');

/* GET users listing. */
router.post('/login', function(req, res, next) {
  //var User = DB.get("User");
  //User.where(params,function(err,result){
  //  if(err){
  //    next(err);
  //  }else{
  //    if(result && result.length>0){
  //     // req.session.user=result[0];
  //      //var params={id_:result[0].id_,username:,lastloginip:ip_};//更新登录时间'id_','username','password','status','role','desc'
  //     // User.update(params);
  //      res.render("main");
  //    }else{
  //      res.render('signin',{message:'用户名或密码错误'});
  //    }
  //  }
  //
    console.log("11");

    userservice.findByUsernameAndPassword(req.body.username, req.body.password, function (result) {
        if(result&&result.length>0){
            res.render('main');
        }else{
            res.render('signin',{message:'用户名或密码错误'});
        }
    });
})

module.exports = router;
