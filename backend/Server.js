// Server.js
var express = require('express');
var jwt = require('jsonwebtoken');
var {MongoClient} = require('mongodb');
var cors = require('cors');
require('dotenv').config()
var mongoserver= new MongoClient(process.env.MONGO_URL)
var secretkey=process.env.SECRET_KEY
var app = express();
app.use(express.json());
app.use(cors());
var routes = require('./Routes/routes');
app.use('/api', routes);

 app.listen(3000, () => {
    console.log('Server is running on port 3000');
 });