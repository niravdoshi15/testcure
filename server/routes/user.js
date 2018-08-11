var express = require('express')
var router = express.Router();

var User = require('../model/users')
var bodyParser = require('body-parser')


router.get('/users', function (req, res, next) {
    User.find(function (err, docs) {
        if (err) res.json({ msg: 'something went wrong' })
        else {
            res.json(docs);
        }
    })
})

router.post('/users/login', function (req, res, next) {
    User.find({ username: req.body.username, password: req.body.password }, function (err, docs) {
        if (err) {
            res.json({ msg: 'error in finding user' })
        }
        else {
            if (docs.length == 1)
                res.json({ msg: "Login successful" })
            else
                res.json({ msg: 'Login Failed' })
        }
    })
})


router.post('/users/signup', function (req, res, next) {
    var newUser = new User(req.body)
    newUser.save((err, docs) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(docs)
        }
    })
})
module.exports = router;