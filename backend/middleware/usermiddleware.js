var jwt = require('jsonwebtoken');
var {MongoClient} = require('mongodb');
var cors = require('cors');
require('dotenv').config()
var mongoserver= new MongoClient(process.env.MONGO_URL)
var secretkey=process.env.SECRET_KEY

// midileware for authentication
async function auth(req,res,next){
  var token =req.headers.authorization;
  if(!token){
    return res.status(401).json({error:"No token provided"});
  }
  else{
    try{
      var decoded = jwt.verify(token, secretkey);
      next();
    } catch (error) {
      return res.status(401).json({error:"Invalid token"});
    }
  }
}
module.exports={
    auth
}