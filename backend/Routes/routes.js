var express = require('express');
var routes = express.Router();
var admin = require('../controllers/admin/admin');
var user = require('../controllers/users/User');
var { registerresponse } = require('../controllers/authentication/register');
var { loginresponse } = require('../controllers/authentication/login');

//routes
var {auth} = require('../middleware/jwt');
var {getdata} = require('../controllers/admin/admin');

routes.get('/admin',auth,getdata)
routes.post('/register', registerresponse);
routes.post('/login', loginresponse);
module.exports = routes;