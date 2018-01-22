var express = require('express');
var fetch = require('node-fetch')
var bodyParser = require('body-parser');

var router = express.Router();

var jsonData = [
    { id: 1, name: "Asaad saad", course: "cs572", grade: 95 },
    { id: 2, name: "Ramy saad", course: "cs572", grade: 100 },
    { id: 3, name: "Saad saad", course: "cs572", grade: 100 },
]

var urlparser = bodyParser.urlencoded({ extended: false })

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json(jsonData);
});
router.get('/:id', urlparser, function (req, res, next) {

    var result;
    for (data in jsonData) {
        if (jsonData[data].id == req.params.id)
            result = jsonData[data]
    }

    res.json(result);
});

router.post('/', function (req, res, next) {
    res.json({ message: 'hooray! welcome to our api!' });

});

router.put('/:id', function (req, res, next) {
    res.json({ message: 'hooray! welcome to our api!' });

});

router.delete('/', function (req, res, next) {
    res.json({ message: 'hooray! welcome to our api!' });

});




module.exports = route