const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.post('/', function (req, res, next){
    console.log("did it get to the post?");
    const { firstName, lastName, password, gender, email } = req.body;
    const user = new User({
        firstName,
        lastName,
        password,
        gender,
        email
    });
    console.log(user);
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                errorTitle: 'Um erro aconteceu na hora de salvar.',
                error: err
            });
        }
        res.status(201).json({
            msgSucess: 'User salva com sucesso',
            objMessageSave: result
        });
    });
});

module.exports = router;