var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('./strategies/user-mongo.js');

app.listen(process.env.PORT || 9003, function(){ console.log("URL Successful"); });

app.use(express.static('server/public'));

var mongobUri = 'mongob://patience1097:poopoo12@ds161505.mlab.com:61505/patience-chat';
mongoose.connect(mondodbUri);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: {maxage: 60000, secure: false}
})); // end session

app.use(passport.initialize());
app.use(passport.session());

app.use('/');

app.get('/*', function(req,res){
  console.log('You Are in L');
  var file = req.params[0] || 'views/pages/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
}); // end app.get base URL
