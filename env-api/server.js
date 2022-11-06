var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Env = require('./api/models/envModel'), //created model loading here
bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoUrl = process.env.MONGO_URL || 'mongodb://root:secret@localhost:27017/environmentdb?authMechanism=DEFAULT&authSource=admin'
console.log('MONGO_URL=' + mongoUrl)
mongoose.connect(mongoUrl); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/envRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Environment RESTful API server started on: ' + port);
