const Message = require('../models/Message');

async function get_message (req, res) {
    console.log('try to get messages');
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId
        });
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json(err);
    }
};

async function new_message (req, res) {
    console.log('try to new messages');
    try {
        const new_message = new Message({
            sender: req.body.sender,
            text: req.body.text

        });
        await new_message.save();


        res.status(200).json(new_message);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    get_message,
    new_message
}

