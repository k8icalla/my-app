const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.render('index', { title: 'Badminton Home', message: 'Welcome to the Badminton World!' });
});

// About route
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Badminton', description: 'Badminton is a racquet sport played with a shuttlecock.' });
});

module.exports = router;
