var express = require('express');
var fetch = require('node-fetch')
const crypto = require('crypto');

var router = express.Router();
const secret = 'asaadsaad';
const decipher = crypto.createDecipher('aes256', secret);


var MongoClient = require('mongodb').MongoClient;

/* GET users listing. */
router.get('/', function (req, res, next) {
    MongoClient.connect('mongodb://localhost:27017/test', function (err, client) {
        if (err) throw new Error('Database failed to connect!');
        var myDB = client.db('test');
        myDB.collection('homework7').findOne({}, function (err, doc) {
            if (err) throw new Error('Database failed to connect!');
            let decrypted = decipher.update(doc.message, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            res.end(decrypted);
            
        })




    });

});




module.exports = router;
