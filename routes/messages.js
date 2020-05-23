const express = require('express');
const router = express.Router();

const Message = require('../models/Message');

router.post('/', function (req, res, next) {
    const message = new Message({
        content: req.body.content
    });
    message.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                errorTitle: 'Um erro aconteceu na hora de salvar.',
                error: err
            });
        }
        res.status(201).json({
            msgSucess: 'Mensagem salva com sucesso',
            objMessageSave: result
        });
    });
});

router.get('/', function (req, res, next) {
    Message.find()
        .exec(function(err, result) {
            if (err) {
                return res.status(500).json({
                    erroTitle: 'Um erro aconteceu na hora de buscar os dados',
                    error: err
                });
            }
            res.status(200).json({
                msgSucess: 'Mensagem recuperada com sucesso',
                objSMessageSRecuperadoS: result
            });
        });
});

module.exports = router;