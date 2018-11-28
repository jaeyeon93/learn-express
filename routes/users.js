var express = require('express');
var User = require('../models').User;

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    User.findAll()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

router.post('/', function (req, res, next) {
    User.create({
        name: req.body.name,
        age: req.body.age,
        married: req.body.married,
    })
        .then((result) => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
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
