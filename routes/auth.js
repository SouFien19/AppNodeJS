const express = require("express");
const path = require('path'); // Import path module

const router = express.Router();

// Route for /auth/login
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../static/login.html'));
});

// Route for /auth/register
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../static/register.html'));
});

module.exports = router;
