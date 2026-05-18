const express = require('express');
const authRoutes = require('./routes/auth');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows your React app to communicate with this server
app.use(express.json()); // Allows the server to read JSON data from requests
app.use('/api/auth', authRoutes);

// Basic Test Route
app.get('/', (req, res) => {
    res.send('ConnectCU Backend is running!');
});

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB!');

        // Only start listening once the database is connected
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection failed:', error);
    });