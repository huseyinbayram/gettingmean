/**
 * Created by hbayram on 27.04.2016.
 */
exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello, world!',
        user: JSON.stringify(req.user)
   });
};
