var express = require('express');
var jwt = require('jsonwebtoken');
var { MongoClient } = require('mongodb');
require('dotenv').config();

var mongoserver = new MongoClient(process.env.MONGO_URL);
var secretkey = process.env.SECRET_KEY;
var bcrypt = require('bcrypt');

var db = mongoserver.db(process.env.DB_NAME);


function getdata(req,res){
    res.send("admin data")
}
async function addEvent(req, res) {
    try {

        const event = req.body;

        const result = await db.collection("events").insertOne(event);
        console.log("Insert Result:", result);

        res.status(201).json({
            success: true,
            message: "Event created successfully",
            eventId: result.insertedId
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
}
async function getEvents(req, res) {
    try {

        const events = await db.collection("events").find().toArray();

        res.json({
            success: true,
            events: events
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
}


module.exports={
    getdata,
    addEvent,
    getEvents
}