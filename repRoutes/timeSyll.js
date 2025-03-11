const express = require('express')
const router = express.Router()

const timesyll2022Model = require('../RegModel/BEReg2022/timeSyllModel')


router.post('/timesyll', async (req, res, next) => {
    const { reg, dept } = req.body;

    try {
        const sub = await timesyll2022Model.findOne({ depname: dept });

        if (!sub) {
            return res.status(404).send('not present'); 
        }

        res.json(sub); 
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router