const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS
require('dotenv').config();

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

// User model
const User = require('./models/User');

// Routes
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        res.json({ message: 'Login successful!' });
    } else {
        res.status(400).json({ message: 'Invalid credentials!' });
    }
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json({ message: 'User registered successfully!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
