const express = require('express');
const router = express.Router();

const Message = require('../models/Message');
const User = require('../models/User');

router.post('/', function (req, res, next) {
    console.log(req.body.userId);
    const message = new Message({
        content: req.body.content,
        username: req.body.username,
        userID: req.body.userId
    });
    console.log(message.userID);
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
    console.log(message);
    User.updateOne({_id: message.userID }, { $push: { messages: message._id}}, (err, doc) => {
        if (err) {
            return res.status(500).json({
                errorTitle: 'Um erro aconteceu na hora de salvar a mensagem no usuario.',
                error: err
            });
        }
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

router.delete('/:messageId', function (req, res, next) {
    Message.findByIdAndDelete(req.params.messageId, function(err, result) {
        if (err) {
            return res.status(500).json({
                errorTitle: 'Ocorreu um erro ao tentar deletar a mensagem',
                error: err
            });
        }
        res.status(200).json({
            msgSucess: 'Mensagem deletada com sucesso',
            deletedMessage: result
        });
    });
});

router.put('/:messageId', function (req, res, next) {
    const { content } = req.body;
    Message.findByIdAndUpdate(req.params.messageId, { content }, { new: true }, function(err, result) {
        if (err) {
            return res.status(500).json({
                errorTitle: 'Ocorreu um erro ao tentar atualizar a mensagem',
                error: err
            });
        }
        res.status(200).json({
            msgSucess: 'Mensagem alterada com sucesso',
            changedMessage: result
        });
    });
});

module.exports = router;