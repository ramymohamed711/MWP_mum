var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var router = express.Router();

var index = require('./routes/index');


var app = express();


app.enable('trust proxy')
app.enable('case sensitive routing')
app.set('strict routing', true)
app.set('view cache', true)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

var MongoClient = require('mongodb').MongoClient;
var myDB;
MongoClient.connect('mongodb://localhost:27017/test', function (err, client) {
  if (err) throw new Error('Database failed to connect!');
  myDB = client.db('test');
})


//

/* GET users listing. */
app.get('/crud', function (req, res, next) {
  var r;
  myDB.collection('locations').find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [-91.9737731, 41.0143935]
        },
        $maxDistance: 1000
      }
    }
  }).limit(3).toArray(function (err, result) {
    if (err) throw err;
    console.log(result)
    res.json(JSON.stringify(result))
  });



});

/**
* insert into the array
*/
app.post('/crud', function (req, res, next) {
  console.log(req.body)
  req.body.location = {
    type: "Point",
    coordinates: [parseFloat(req.body.location[0]),
    parseFloat(req.body.location[1])]
  }


  myDB.collection("locations").insertOne(req.body, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
  res.contentType("application/json")
  res.status(200)
  res.json("Inserted");
});
/**
* update record using id
*/
app.put('/crud/:id', function (req, res, next) {
  for (data in jsonData) {
    //   if (jsonData[data].id == req.params.id)
    //update code
  }
  res.contentType("application/json")
  res.status(200)
  res.json({ message: jsonData });
});

/**
* Delete recode using id
*/
app.delete('/crud/:id', function (req, res, next) {
  for (data in jsonData) {
    //if (jsonData[data].id == req.params.id)
    // delete code 

  }
  res.contentType("application/json")
  res.status(200)
  res.json({ message: jsonData });
});





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000)
module.exports = app;
