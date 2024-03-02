// Create Route 

const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require ('../models/user')
const router = express.Router();


router.post('/register', async (req,res) =>{
    try {
        const {username,password}=req.body;
        const user = new User ({username,password})
        await user.save();
        res.status(201).send('User Registred succesfully');
    } catch (error){
        res.status(400).send(error.message)
    }
})

// login 

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(404).send('User not found');
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).send('Invalid password');
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.status(200).send({ message: 'Login successful'});
        // res.status(200).send({ message: 'Login successful', token: token }); for show the token with the message 
    } catch (error) {
        res.status(400).send(error.message);
    }
});

 module.exports = router;