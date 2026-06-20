var jwt = require('jsonwebtoken');
var { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

var mongoserver = new MongoClient(process.env.MONGO_URL);
var secretkey = process.env.SECRET_KEY;
var db = mongoserver.db(process.env.DB_NAME);

async function me(req, res) {
  var token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    var decoded = jwt.verify(token, secretkey);
    var user = await db.collection('Users').findOne(
      { _id: new ObjectId(decoded.id) },
      { projection: { password: 0 } }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = { me }