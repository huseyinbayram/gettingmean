/**
 * Created by kozmobot on 5.05.2016.
 */
var users = require('../../app/controllers/users.server.controller'),
    passport = require('passport');

module.exports = function (app) {
    app.route('/signup')
        .get(users.renderSignup)
        .post(users.signup);

    app.route('/signin')
        .get(users.renderSignin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }));

    app.get('/signout', users.signout);

    app.get('/oauth/facebook', passport.authenticate('facebook', {
        scope: ['public_profile', 'email'],
        failureRedirect: '/signin'
    }));

    app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
        scope: ['public_profile', 'email'],
        failureRedirect: '/signin',
        successRedirect: '/'
    }));
};