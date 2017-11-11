/* Shop Genie        */
/* by Brian Cottrell */
/* 11-09-2017        */

//Add dependencies
var express = require('express'),
    app = express(),
    config,
    page = 'home';
//Include configuration variables
    if(!process.env.ENVIRONMENT){
        config = require('./config');
    }

//Add route for root directory
app.get('/', function (req, res) {
    res.send(page);
    page = req.query.page;
    console.log(req.query)
});

//Start Application
app.listen(process.env.PORT || config.port, function () {
    console.log('App listening on port '+(process.env.PORT || config.port)+'!');
});