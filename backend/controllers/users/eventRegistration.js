const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const mongoserver = new MongoClient(process.env.MONGO_URL);
const db = mongoserver.db(process.env.DB_NAME);

async function registerEvent(req, res) {
   console.log("req.user =", req.user);
console.log("req.body =", req.body);
    try {

        const user = req.user; // From auth middleware

        const {
            eventId,
            name,
            email,
            phone
        } = req.body;

        // Check if event exists
        const event = await db.collection("events").findOne({
            _id: new ObjectId(eventId)
        });

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found"
            });
        }

        // Check registration dates
        const today = new Date();

        const start = new Date(event.registrationStart);
        const end = new Date(event.registrationEnd);

        if (today < start) {
            return res.status(400).json({
                success: false,
                message: "Registration has not started yet."
            });
        }

        if (today > end) {
            return res.status(400).json({
                success: false,
                message: "Registration is closed."
            });
        }

        // Check duplicate registration
        const alreadyRegistered = await db
            .collection("eventRegistrations")
            .findOne({
                eventId: eventId,
                userId: user._id
            });

        if (alreadyRegistered) {
            return res.status(400).json({
                success: false,
                message: "You have already registered."
            });
        }

        // Check participant limit
        const totalParticipants = await db
            .collection("eventRegistrations")
            .countDocuments({
                eventId: eventId
            });

        if (totalParticipants >= Number(event.maxParticipants)) {
            return res.status(400).json({
                success: false,
                message: "Event is full."
            });
        }

        // Save registration
        await db.collection("eventRegistrations").insertOne({

            eventId,

            userId: user._id,

            name,

            email,

            phone,

            registeredAt: new Date()

        });

        res.status(201).json({
            success: true,
            message: "Registration Successful"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
}

module.exports = {
    registerEvent
};