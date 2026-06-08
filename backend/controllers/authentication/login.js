var express = require('express');
var jwt = require('jsonwebtoken');
var { MongoClient } = require('mongodb');
require('dotenv').config();

var mongoserver = new MongoClient(process.env.MONGO_URL);
var secretkey = process.env.SECRET_KEY;
var bcrypt = require('bcrypt');

var db = mongoserver.db("Vision2026");
async function loginresponse(req, res) {
    var { email, password } = req.body;
   
     if (!email || !password) {
       return res.status(400).json({ error: "All fields are required" });
     }
   
     try {
       var user = await db.collection("Users").findOne({ email });
       if (!user) {
         return res.status(400).json({ error: "Invalid email or password" });
       }
       var isMatch = await bcrypt.compare(password, user.password);
       if (!isMatch) {
         return res.status(400).json({ error: "Invalid email or password" });
       }
       var token = jwt.sign({ id: user._id }, secretkey);
       return res.json({ success: true, message: "Login successful", username: user.username, token });
     } catch (error) {
       return res.status(500).json({ error: error.message });
     } 
}
module.exports = {
    loginresponse
}