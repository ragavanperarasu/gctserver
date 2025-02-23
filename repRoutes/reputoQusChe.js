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





router.post('/reputoqusche', async (req, res, next) => {
    const { pdept, psem, preg, psub, qyear } = req.body


    if(pdept === "Civil Engineering"){
        sub = await civilModel.findOne({
            sem:psem, sub : {
                $elemMatch:{
                    "subname":psub,
                    "utoqus.year":qyear
                }
            }}
        )
    }
    else if(pdept === "Mechanical Engineering"){
        sub = await mechModel.findOne({
            sem:psem, sub : {
                $elemMatch:{
                    "subname":psub,
                    "utoqus.year":qyear
                }
            }
        })
       
    }
    else if(pdept === "Electrical And Electronics Engineering"){
        sub = await eeeModel.findOne({
            sem:psem, sub : {
                $elemMatch:{
                    "subname":psub,
                    "utoqus.year":qyear
                }
            }
        })
        
    }
    else if(pdept === "Electronics And Communication Engineering"){
        sub = await eceModel.findOne({
            sem:psem, sub : {
                $elemMatch:{
                    "subname":psub,
                    "utoqus.year":qyear
                }
            }
        })
    }
    else if(pdept === "Production Engineering"){
        sub = await prodModel.findOne({
            sem:psem, sub : {
                $elemMatch:{
                    "subname":psub,
                    "utoqus.year":qyear
                }
            }
        })
    }
    else if(pdept === "Electronics And Instrumentation Engineering"){
        sub = await eandiModel.findOne({
            sem:psem, sub : {
                $elemMatch:{
                    "subname":psub,
                    "utoqus.year":qyear
                }
            }
        })
    }
    else if(pdept === "Computer Science Engineering"){
        sub = await cseModel.findOne({
            sem:psem, sub : {
                $elemMatch:{
                    "subname":psub,
                    "utoqus.year":qyear
                }
            }
        })
    }
    else if(pdept === "Information Technology"){
        sub = await itModel.findOne({
            sem:psem, sub : {
                $elemMatch:{
                    "subname":psub,
                    "utoqus.year":qyear
                }
            }
        })
    }
    else if(pdept === "Industrial Bio Technology"){
        sub = await ibtModel.findOne({
            sem:psem, sub : {
                $elemMatch:{
                    "subname":psub,
                    "utoqus.year":qyear
                }
            }
        })
    } 
    
 
    if(sub == null){
        res.send('not present')
    }else{
        res.send("present")
    }
})

module.exports = router