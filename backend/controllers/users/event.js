var express = require('express');
var jwt = require('jsonwebtoken');
var { MongoClient } = require('mongodb');
require('dotenv').config();

var mongoserver = new MongoClient(process.env.MONGO_URL);
var secretkey = process.env.SECRET_KEY;
var bcrypt = require('bcrypt');

var db = mongoserver.db(process.env.DB_NAME);

const { ObjectId } = require('mongodb');
 const registerEvent = async (req, res) => 
    { try { const db = req.app.locals.db;
         const events = db.collection("events");
          const registrations = db.collection("eventRegistrations");
           const eventId = req.body.eventId;
            const event = await events.findOne({ _id: new ObjectId(eventId) }); 
           if (!event) { return res.json({ success: false, message: "Event Not Found" });
         } 
         const now = new Date(); 
         if (now < new Date(event.registrationStart))
             { return res.json({ success: false, message: "Registration has not started" });
         } 
         if (now > new Date(event.registrationEnd)) 
            { return res.json({ success: false, message: "Registration Closed" });
         } 
         const already = await registrations.findOne({ eventId, userId: req.user.id }); 
         if (already)
              { return res.json({ success: false, message: "Already Registered" });
         }
          const total = await registrations.countDocuments({ eventId });
           if (total >= event.maxParticipants) { return res.json({ success: false, message: "Event Full" }); 
        }
         await registrations.insertOne({
             eventId,
              userId: req.user.id,
               name: req.user.name,
                email: req.user.email,
                 registeredAt: new Date() });
                  res.json({ success: true, message: "Registration Successful" });
                 } catch (err) { res.json({ success: false, message: err.message });
                 }
                 }; 
                 
                 
                 module.exports = { registerEvent };
