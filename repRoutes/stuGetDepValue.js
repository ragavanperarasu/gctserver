const express = require('express')
const router = express.Router()

const civilModel = require('../Reg2022qus/civilModel')
const cseModel = require('../Reg2022qus/cseModel')
const eandiModel = require('../Reg2022qus/eandiModel')
const eceModel = require('../Reg2022qus/eceModel')
const eeeModel = require('../Reg2022qus/eeeModel')
const ibtModel = require('../Reg2022qus/ibtModel')
const itModel = require('../Reg2022qus/itModel')
const mechModel = require('../Reg2022qus/mechModel')
const prodModel = require('../Reg2022qus/prodModel')



router.post('/stugetdepvalue', async (req, res, next) => {
    console.log("get data")
    const { dept, sem, reg } = req.body
    if(dept === "Civil Engineering"){
        sub = await civilModel.findOne({sem:sem}, {sub:1, _id:0})
    }
    else if(dept === "Mechanical Engineering"){
        sub = await mechModel.findOne({sem:sem}, {sub:1, _id:0})
       
    }
    else if(dept === "Electrical And Electronics Engineering"){
        sub = await eeeModel.findOne({sem:sem}, {sub:1, _id:0})
        
    }
    else if(dept === "Electronics And Communication Engineering"){
        sub = await eceModel.findOne({sem:sem}, {sub:1, _id:0})
    }
    else if(dept === "Production Engineering"){
        sub = await prodModel.findOne({sem:sem}, {sub:1, _id:0})
    }
    else if(dept === "Electronics And Instrumentation Engineering"){
        sub = await eandiModel.findOne({sem:sem}, {sub:1, _id:0})
    }
    else if(dept === "Computer Science Engineering"){
        sub = await cseModel.findOne({sem:sem}, {sub:1, _id:0})
    }
    else if(dept === "Information Technology"){
        sub = await itModel.findOne({sem:sem}, {sub:1, _id:0})
    }
    else if(dept === "Industrial Bio Technology"){
        sub = await ibtModel.findOne({sem:sem}, {sub:1, _id:0})
    } 
    res.send(sub)
})

module.exports = router