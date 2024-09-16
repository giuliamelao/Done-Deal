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
    try {
        const user = await User.findOne({ email, password });
        if (user) {
            res.json({ message: 'Login successful!', user: { email: user.email, name: user.name } });
        } else {
            res.status(400).json({ message: 'Invalid credentials!' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
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

const Task = require('./models/Task');

// Add a new task
app.post('/addTask', async (req, res) => {
    const { name, description, priority, type, color, email } = req.body;
    
    // Find user by email to get their _id
    const user = await User.findOne({ email });
    
    if (user) {
        const task = new Task({
            name,
            description,
            priority,
            type,
            color,
            userId: user._id // Use user _id
        });
        await task.save();
        res.json({ success: true });
    } else {
        res.status(400).json({ message: 'User not found!' });
    }
});

// Get tasks for a specific user
app.get('/tasks', async (req, res) => {
    const { email } = req.query;

    // Find user by email to get their _id
    const user = await User.findOne({ email });
    
    if (user) {
        const tasks = await Task.find({ userId: user._id }); // Filter by user _id
        res.json({ tasks });
    } else {
        res.status(400).json({ message: 'User not found!' });
    }
});
