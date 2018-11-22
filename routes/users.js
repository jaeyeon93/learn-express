var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/flash', function (req, res) {
    req.session.message = '세션메세지';
    req.flash('message', 'flash메세지');
    res.redirect('/users/flash/result');
});

router.get('/users/flash/result', function (req, res) {
    res.send(`${req.session.message} ${req.flash('message')}`);
});

module.exports = router;
