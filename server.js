var fs = require('fs');
var path = require('path');
var express = require('express');
var handlebars = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')
var app = express();
var port = process.env.PORT || 4000;
var array = require('./sportData');

var mongoURL = 'mongodb://cs290_miurary:cs290_miurary@classmongo.engr.oregonstate.edu:27017/cs290_miurary';
var mongoConnection = null;

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.status(200).render('login');
  console.log("== Server status", res.statusCode);
});

app.get('/home', function(req, res) {
  res.status(200).render('homepage', {sports: array});
  console.log("== Server status from home", res.statusCode);
});

app.get('/post', function(req, res) {
  res.status(200).render('post_event');
  console.log("== Server status from new post", res.statusCode);
});

app.get('/resetpassword', function(req, res) {
  res.status(200).render('new_password');
  console.log("== Server status from reset password", res.statusCode);
});

// Hard-coded Sports

app.get('/sport/Basketball', function(req, res) {
  var id = "Basketball";
  var collection;
  var results;
    collection = mongoConnection.collection('basketball');
    results = collection.find({}).toArray(function (err, results) {
      if (err) {
        res.status(500).send("Error fetching");
      }
      else {
        res.status(200).render('sports_page', {
          name: id,
          result: results
        });
      }
    });
  console.log("== Server status from sport page", res.statusCode);
});

app.get('/sport/Baseball', function(req, res) {
  var id = "Baseball";
  var collection;
  var results;
    collection = mongoConnection.collection('baseball');
    results = collection.find({}).toArray(function (err, results) {
      if (err) {
        res.status(500).send("Error fetching");
      }
      else {
        res.status(200).render('sports_page', {
          name: id,
          result: results
        });
      }
    });
  console.log("== Server status from sport page", res.statusCode);
});

app.get('/sport/Football', function(req, res) {
  var id = "Football";
  var collection;
  var results;
    collection = mongoConnection.collection('football');
    results = collection.find({}).toArray(function (err, results) {
      if (err) {
        res.status(500).send("Error fetching");
      }
      else {
        res.status(200).render('sports_page', {
          name: id,
          result: results
        });
      }
    });
  console.log("== Server status from sport page", res.statusCode);
});

app.get('/sport/Rugby', function(req, res) {
  var id = "Rugby";
  var collection;
  var results;
    collection = mongoConnection.collection('rugby');
    results = collection.find({}).toArray(function (err, results) {
      if (err) {
        res.status(500).send("Error fetching");
      }
      else {
        res.status(200).render('sports_page', {
          name: id,
          result: results
        });
      }
    });
  console.log("== Server status from sport page", res.statusCode);
});

app.get('/sport/Soccer', function(req, res) {
  var id = "Soccer";
  var collection;
  var results;
    collection = mongoConnection.collection('soccer');
    results = collection.find({}).toArray(function (err, results) {
      if (err) {
        res.status(500).send("Error fetching");
      }
      else {
        res.status(200).render('sports_page', {
          name: id,
          result: results
        });
      }
    });
  console.log("== Server status from sport page", res.statusCode);
});

app.get('/sport/Hockey', function(req, res) {
  var id = "Hockey";
  var collection;
  var results;
    collection = mongoConnection.collection('hockey');
    results = collection.find({}).toArray(function (err, results) {
      if (err) {
        res.status(500).send("Error fetching");
      }
      else {
        res.status(200).render('sports_page', {
          name: id,
          result: results
        });
      }
    });
  console.log("== Server status from sport page", res.statusCode);
});

app.get('/sport/Volleyball', function(req, res) {
  var id = "Volleyball";
  var collection;
  var results;
    collection = mongoConnection.collection('volleyball');
    results = collection.find({}).toArray(function (err, results) {
      if (err) {
        res.status(500).send("Error fetching");
      }
      else {
        res.status(200).render('sports_page', {
          name: id,
          result: results
        });
      }
    });
  console.log("== Server status from sport page", res.statusCode);
});

app.get('/sport/Tennis', function(req, res) {
  var id = "Tennis";
  var collection;
  var results;
    collection = mongoConnection.collection('tennis');
    results = collection.find({}).toArray(function (err, results) {
      if (err) {
        res.status(500).send("Error fetching");
      }
      else {
        res.status(200).render('sports_page', {
          name: id,
          result: results
        });
      }
    });
  console.log("== Server status from sport page", res.statusCode);
});

app.get('/sport/Frisbee', function(req, res) {
  var id = "Frisbee";
  var collection;
  var results;
    collection = mongoConnection.collection('frisbee');
    results = collection.find({}).toArray(function (err, results) {
      if (err) {
        res.status(500).send("Error fetching");
      }
      else {
        res.status(200).render('sports_page', {
          name: id,
          result: results
        });
      }
    });
  console.log("== Server status from sport page", res.statusCode);
});

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).render('404');
  console.log("== Server status", res.statusCode);
});

app.post('/newUser', function (req, res) {

if (req.body && req.body.user && req.body.pass && req.body.email) {
  var collection = mongoConnection.collection('users');
  collection.insertOne({
    user: req.body.user,
    pass: req.body.pass,
    email: req.body.email
  })
  res.status(200).send("Successfully added user");
  console.log("== User Added");
}
else {
  res.status(400).send("User signup failed");
}
});

// Hard-coded Sports

// app.post('/newBasketball', function (req, res) {
// // pls check this i don't know if this works!!!
// if (req.body && req.body.user && req.body.title && req.body.day && req.body.month && req.body.year && req.body.seriousness) {
//   var collection = mongoConnection.collection('basketball');
//   collection.insertOne({
//     user: req.body.user,
//     title: req.body.title,
//     day: req.body.day
//     month: req.body.month
//     year: req.body.year
//     seriousness: req.body.seriousness
//   })
//   res.status(200).send("Successfully added post");
//   console.log("== Post Added");
// }
// else {
//   res.status(400).send("Event post failed");
// }
// });

app.post('/verifyLogIn', function (req, res) {

  if (req.body && req.body.user && req.body.pass) {
    var collection = mongoConnection.collection('users');
    var query = {user: req.body.user};
    collection.find(query).toArray(function(err, result) {
      if (err) throw (err);
      if (result && result[0].pass && result[0].pass == req.body.pass) {
        res.status(200).send("Passwords verified");
        console.log("== Passwords match");
      }
      else {
        res.status(300).send("Passwords don't match");
        console.log("== Passwords don't match");
      }
    });
  }
});

MongoClient.connect (mongoURL, function (err, connection) {

  if (err)
    throw err;
  mongoConnection = connection;
  app.listen(port, function () {
    console.log("== Server listening on port:", port);
});
});
