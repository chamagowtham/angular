var express = require('express');

var fs = require('fs');
var jsonfile = require('jsonfile');

var router = express.Router();

router.use(function(req, res, next) {
    req.requestTime = Date.now();
    //console.log(req.requestTime);
    next();
});

router.get('/', function(req, res) {
    res.sendFile('index.html');
});

router.post('/getResults', function(req, res) {

    console.log(req);

    res.send({
        data: 'success'
    });
});

module.exports = router;