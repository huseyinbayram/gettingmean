/**
 * Created by kozmobot on 27.04.2016.
 */
module.exports = {
    // Development configuration options
    db: 'mongodb://localhost/mean-second',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: '190243067717118',
        clientSecret: '76765ce3603237a435b7bcb784da72c9',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    }
};