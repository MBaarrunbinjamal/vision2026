var express = require('express');
var routes = express.Router();
var admin = require('../controllers/admin/admin');
var user = require('../controllers/users/User');
var { registerresponse } = require('../controllers/authentication/register');
var { loginresponse } = require('../controllers/authentication/login');
var {auth} = require('../middleware/usermiddleware');
var {getdata,addEvent,getEvents} = require('../controllers/admin/admin');
var {adminauth} = require('../middleware/adminmiddleware');
var {me} = require('../controllers/authentication/check');
var { registerEvent } = require('../controllers/users/eventRegistration');

//routes

routes.get('/admin',adminauth,getdata);
routes.get('/userdata',adminauth,getdata);
routes.get('/events',  getEvents);
routes.post('/register', registerresponse);
routes.post('/login', loginresponse);
routes.get('/me', me);
routes.post('/addEvent', adminauth, addEvent);
routes.post('/registerEvent',auth,  registerEvent);


module.exports = routes;