var jwt = require('jsonwebtoken');
var { MongoClient, ObjectId } = require("mongodb");
var cors = require('cors');
require('dotenv').config()
var mongoserver= new MongoClient(process.env.MONGO_URL)
var secretkey=process.env.SECRET_KEY
var db = process.env.DB_NAME;

// midileware for authentication
async function auth(req,res,next){
  var token =req.headers.authorization;
  if(!token){
    return res.status(401).json({error:"No token provided"});
  }
  else{
    try{
      var decoded = jwt.verify(token, secretkey);
         var user = await mongoserver
            .db(db)
            .collection("Users")
            .findOne({
                _id: new ObjectId(decoded.id)
            });

        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }

        // ⭐ Store user in request
        req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({error:"Invalid token"});
    }
  }
}
module.exports={
    auth
}