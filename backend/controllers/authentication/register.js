var express = require('express');
var jwt = require('jsonwebtoken');
var { MongoClient } = require('mongodb');
require('dotenv').config();

var mongoserver = new MongoClient(process.env.MONGO_URL);
var secretkey = process.env.SECRET_KEY;
var bcrypt = require('bcrypt');

var db = mongoserver.db(process.env.DB_NAME);

async function registerresponse(req, res) {
    var { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({
            error: "All fields are required"
        });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({
            error: "Passwords do not match"
        });
    }

    if (password.length < 8 || password.length > 32) {
        return res.status(400).json({
            error: "Password must be between 8 and 32 characters"
        });
    }

    try {
        await mongoserver.connect();

        var existingUser = await db.collection("Users").findOne({
            email: email
        });

        if (existingUser) {
            return res.status(400).json({
                error: "Email already registered"
            });
        }

        var hashedPassword = await bcrypt.hash(password, 10);

        var result = await db.collection("Users").insertOne({
            username: username,
            email: email,
            password: hashedPassword,
            Role:"User"
        });

        var token = jwt.sign(
            {
                id: result.insertedId,
                email: email
            },
            secretkey,
            {
                expiresIn: "7d"
            }
        );

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            token: token,
            Role:"User"
        });

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}

module.exports = {
    registerresponse
};