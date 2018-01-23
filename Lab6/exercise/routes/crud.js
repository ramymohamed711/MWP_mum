var express = require('express');
var fetch = require('node-fetch')
var router = express.Router();

var jsonData = [
    { id: 1, name: "Asaad saad", course: "cs572", grade: 95 },
    { id: 2, name: "Ramy saad", course: "cs572", grade: 100 },
    { id: 3, name: "Saad saad", course: "cs572", grade: 100 },
]

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json(jsonData);
});

router.get('/:id', function (req, res, next) {
    var result;
    for (data in jsonData) {
        if (jsonData[data].id == req.params.id)
            result = jsonData[data]
    }
    res.contentType("application/json")
    res.status(200)
    res.json(result);
});
/**
 * insert into the array
 */
router.post('/', function (req, res, next) {
    console.log(req.body)
    jsonData.push(req.body)
    res.contentType("application/json")
    res.status(200)
    res.json({ message: jsonData });
});
/**
 * update record using id
 */
router.put('/:id', function (req, res, next) {
    for (data in jsonData) {
        if (jsonData[data].id == req.params.id)
             jsonData[data] = req.body
    }
    res.contentType("application/json")
    res.status(200)
    res.json({ message: jsonData });
});

/**
 * Delete recode using id
 */
router.delete('/:id', function (req, res, next) {
    for (data in jsonData) {
        if (jsonData[data].id == req.params.id)
                jsonData.splice(data, data);
            
    }

    res.contentType("application/json")
    res.status(200)
    res.json({ message: jsonData });
});




module.exports = router;
