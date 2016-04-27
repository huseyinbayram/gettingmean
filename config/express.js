/**
 * Created by hbayram on 27.04.2016.
 */
var express = require('express');

module.exports = function () {
    var app = express();
    require('../app/routes/index.server.routes')(app);
    return app;
};