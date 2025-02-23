const express = require('express')
const router = express.Router()

const civilModel = require('../RegModel/BEReg2022/civilModel')
const cseModel = require('../RegModel/BEReg2022/cseModel')
const eandiModel = require('../RegModel/BEReg2022/eandiModel')
const eceModel = require('../RegModel/BEReg2022/eceModel')
const eeeModel = require('../RegModel/BEReg2022/eeeModel')
const ibtModel = require('../RegModel/BEReg2022/ibtModel')
const itModel = require('../RegModel/BEReg2022/itModel')
const mechModel = require('../RegModel/BEReg2022/mechModel')
const prodModel = require('../RegModel/BEReg2022/prodModel')


router.post('/besub2022', async (req, res, next) => {
    const { dept, sem, reg } = req.body
    let sub;

    if(dept === "Civil Engineering"){
        sub = await civilModel.findOne({sem:sem})
    }
    else if(dept === "Mechanical Engineering"){
        sub = await mechModel.findOne({sem:sem})
       
    }
    else if(dept === "Electrical And Electronics Engineering"){
        sub = await eeeModel.findOne({sem:sem})
        
    }
    else if(dept === "Electronics And Communication Engineering"){
        sub = await eceModel.findOne({sem:sem})
    }
    else if(dept === "Production Engineering"){
        sub = await prodModel.findOne({sem:sem})
    }
    else if(dept === "Electronics And Instrumentation Engineering"){
        sub = await eandiModel.findOne({sem:sem})
    }
    else if(dept === "Computer Science Engineering"){
        sub = await cseModel.findOne({sem:sem})
    }
    else if(dept === "Information Technology"){
        sub = await itModel.findOne({sem:sem})
    }
    else if(dept === "Industrial Bio Technology"){
        sub = await ibtModel.findOne({sem:sem})
    }
    
    if(sub === null){
        res.send("not found")
    }else{
        
        res.send(sub.sub)
    }
    
})

module.exports = router

