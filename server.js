const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const mongoURI = 'mongodb+srv://monengxiang90:Kaoni1qiwa@cluster0.w2a8b.mongodb.net/';
const app = express();
const port = 2024;

// Connect to MongoDB 
mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'Public')));

// Routes
const calculationRoutes = require('./routes/calculationRoutes');
app.use('/api', calculationRoutes);  // Mount routes under /api

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
