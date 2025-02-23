const express = require('express')
const router = express.Router()


const repLoginColl = require('../RepModels/repLogin') 



router.post('/replogin', async (req, res, next) => {
    const { mail, pin } = req.body
    
    const lmail = mail.toLowerCase();
    const loginData = await repLoginColl.findOne({mail:lmail,pin:pin})
 
    if(loginData == null){
        res.send('not valid')
    }else{
        res.send(loginData)
    }
})

module.exports = router