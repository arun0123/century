const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User=require('../Models/User')

const app = express();
const port = 3001;

// MongoDB connection


mongoose.set('debug', true);
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB connected successfully');
       
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });



app.use(bodyParser.json());
app.use(cors());


    app.post('/api/signup', async (req, res) => {
        const { username, password } = req.body;

        try {
            // Check if the user already exists
            const existingUser = await User.findOne({ username });

            if (existingUser) {
                return res.status(400).json({ message: 'Username already exists' });
            }

            // Hash the password before storing it
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user
            const newUser = new User({ username, password: hashedPassword });
            await newUser.save();

            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    });



// Login endpoint
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user in the database
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            res.status(200).json({ token: 'fake-jwt-token', user: { username: user.username } });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
