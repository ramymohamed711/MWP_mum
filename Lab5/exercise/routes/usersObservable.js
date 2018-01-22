var express = require('express');
var fetch = require('node-fetch')
var rx = require('@reactivex/rxjs')

var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    const obj = fetch('http://jsonplaceholder.typicode.com/users/')
    var result = rx.Observable.fromPromise(fetch('http://jsonplaceholder.typicode.com/users/'))
    result.subscribe(x=>{
        var tmp = rx.Observable.fromPromise(x.json())
        tmp.subscribe(body=>res.render('users',{ users: body }))
    })

})


module.exports = router;
