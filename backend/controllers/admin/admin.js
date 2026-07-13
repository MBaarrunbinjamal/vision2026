var express = require('express');
var jwt = require('jsonwebtoken');
var { MongoClient } = require('mongodb');
require('dotenv').config();

var mongoserver = new MongoClient(process.env.MONGO_URL );
var secretkey = process.env.SECRET_KEY;
var bcrypt = require('bcrypt');
apiserver = express();
apiserver.use(express.json());
var db = mongoserver.db(process.env.DB_NAME);
 
// function getdata(req,res){
//     res.send("admin data")
// }
    async function getdata(req, res) {
    try {
        const record = await db.collection("Users").find({}).toArray();

        res.json({
            record: record
        });
    }
    catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}

module.exports = {
    getdata,
};

 

