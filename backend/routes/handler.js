const express = require('express');
const router = express.Router();
const schema = require('../models/Schemas.js');

router.get('/algoritma/ucbes', async (req, res) => {
    const algorithm_problems = schema.AlgorithmProblems;

    const ucbes = await algorithm_problems.find({}).exec((err, data) => {
        if (err) throw err;
        if (data) {
            res.end(JSON.stringify(data));
        } else {
            res.end();
        }
    });
});

// To use this, run the backend server, then go to URL: localhost:8080/addUser
router.get('/addUser', async (req, res) => {
    const user = {username: 'alberenpirol', fullname: 'Alberen Pirol', age:31};
    const newUser = new schema.Users(user);
    try {
        await newUser.save( async(err, newUserResult) => {
            console.log('New user created!');
            res.end('New user created!');
        });
    } catch(err) {
        console.log(err);
        res.end('User not added!');
    }
});


module.exports = router;