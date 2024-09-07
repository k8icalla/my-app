const express = require('express');
const app = express();
const path = require('path');

// Import the route from the routes folder
const badmintonRoutes = require('./routes/badminton');

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files (like CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Use routes from routes folder
app.use('/', badmintonRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
