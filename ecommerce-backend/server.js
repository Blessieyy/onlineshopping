// server.js
const express = require('express');
const firebaseAdmin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(require('./serviceAccountKey.json'))
});

const SECRET_KEY = process.env.JWT_SECRET;

// Registration route
app.post('/register', async (req, res) => {
  const { email, password, lName, fName } = req.body;

  try {
    // Check if user already exists
    const userRecord = await firebaseAdmin.auth().getUserByEmail(email).catch(() => null);
    if (userRecord) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Hash the password for additional security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create Firebase user
    const newUser = await firebaseAdmin.auth().createUser({
      email,
      password: hashedPassword,
      lastName: lName,
      firstName: fName,
    });

    // Store user data in Firestore
    await firebaseAdmin.firestore().collection('users').doc(newUser.uid).set({
      fName,
      lname,
      email,
      createdAt: new Date().toISOString(),
    });

    // Generate JWT token
    const token = jwt.sign({ uid: newUser.uid, email }, SECRET_KEY, { expiresIn: '1h' });

    res.status(201).json({ token, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
