/* Shop Genie        */
/* by Brian Cottrell */
/* 11-09-2017        */

//Add dependencies
var express = require('express'),
    app = express(),
    config,
    page = 'home',
    barcode;
//Include configuration variables
    if(!process.env.ENVIRONMENT){
        config = require('./config');
    }

//Add route for root directory
app.get('/', function (req, res) {
    res.send(page);
    if (req.query.page != null) {
        page = req.query.page;
    }
    if (req.query.barcode != null) {
        barcode = req.query.barcode
    }
    //Add api logic here
});

//Start Application
app.listen(process.env.PORT || config.port, function () {
    console.log('App listening on port '+(process.env.PORT || config.port)+'!');
});