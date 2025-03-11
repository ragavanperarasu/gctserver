const express = require('express')
const router = express.Router()

const MessageModel = require('../RegModel/BEReg2022/messageModel')


router.get('/message', async (req, res) => {
    try {
        const messages = await MessageModel.find({}).sort({ date: -1 });

        if (messages.length === 0) {
            return res.status(200).json([]); // Return an empty array instead of 404
        }

        res.json(messages); 
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router