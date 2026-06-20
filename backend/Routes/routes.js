var express = require('express');
var routes = express.Router();
var admin = require('../controllers/admin/admin');
var user = require('../controllers/users/User');
var { registerresponse } = require('../controllers/authentication/register');
var { loginresponse } = require('../controllers/authentication/login');
var {auth} = require('../middleware/usermiddleware');
var {getdata} = require('../controllers/admin/admin');
var {adminauth} = require('../middleware/adminmiddleware');
var {me} = require('../controllers/authentication/check');
//routes

routes.get('/admin',adminauth,getdata)
routes.post('/register', registerresponse);
routes.post('/login', loginresponse);
routes.get('/me', me);
module.exports = routes;