module.exports = {
    db: 'mongodb://localhost/mean-second-test',
    sessionSecret: 'testSessionSecret',
    viewEngine: 'ejs',
    facebook: {
        clientID: '305764966423705',
        clientSecret: '4d8097807475a1cc1ddf1b683e71aa25',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    }
};
