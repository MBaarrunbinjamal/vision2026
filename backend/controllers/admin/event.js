var express = require('express');
var jwt = require('jsonwebtoken');
var { MongoClient } = require('mongodb');
require('dotenv').config();

var mongoserver = new MongoClient(process.env.MONGO_URL );
var secretkey = process.env.SECRET_KEY;
var bcrypt = require('bcrypt');

var db = mongoserver.db(process.env.DB_NAME);

const {ObjectId} = require('mongodb');



const getEvents = async (req, res) =>{
    const db = req.app.locals.db;
    const events = db.collection('events');
    const data = await events.find().sort({ createdAt: -1 }).toArray();
    res.json({ success: true, data });
};
module.exports={
    createEvent,
    getEvents,
   
}