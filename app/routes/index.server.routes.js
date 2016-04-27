/**
 * Created by hbayram on 27.04.2016.
 */
module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};