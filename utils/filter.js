/**
 * Created by Tom on 2015/9/18.
 */

exports.authorize = function(req, res, next) {
    if (!req.session.user) {
        res.redirect('/user/login');
    } else {
        res.locals.user = req.session.user;
        next();
    }
};
