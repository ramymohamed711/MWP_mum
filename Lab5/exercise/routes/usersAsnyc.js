

var express = require('express');
var fetch = require('node-fetch')
var router = express.Router();

function gettinghelper() {
    return fetch('http://jsonplaceholder.typicode.com/users/')
        .then(data => { return data.json() })
}

async function getdata(res) {
    var result
    try {
        result = await gettinghelper()
        res.render('users', { users: result })
    } catch (error) {
        console.log(error)
    }
    return result
}

/* GET users listing. */
router.get('/', function (req, res, next) {
    getdata(res)
});

module.exports = router;
