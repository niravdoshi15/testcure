var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('config');
var path = require('path');
const jwt = require('./helper/jwt');

var app = express();

var userRoutes=require('./routes/user');

mongoose.connect('mongodb://localhost:27017/testcuredb');
mongoose.connection.on("connected", () => {
    console.log("connected to mongodb on port 27017")
})
mongoose.connection.on("error", (err) => {
    if (err)
        console.log('failed to connect to mongodb:' + err);
})

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With,Content-Type,Accept");
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE')
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(jwt());

app.use('/api',userRoutes);

app.listen(config.get("express.port"), function (err) {
    if (err) {
        console.log("Couldn't start app server");
        return;
    }
    var host = `${config.get("express.host")}:${config.get("express.port")}`;
    console.log(`Express server started at ${host}`);

})