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



router.post('/reputtqusupl', async (req, res, next) => {
    const { pdept, psem, preg, psub, qyear, durl, own } = req.body
    const js = {
        "year":qyear,
        "durl":durl,
        "own":own
    }
    if(pdept === "Civil Engineering"){
        sub = await civilModel.updateOne({sem:psem, "sub.subname":psub},{$push:{"sub.$.uttqus":js}})
    }
    else if(pdept === "Mechanical Engineering"){
        sub = await mechModel.updateOne({sem:psem, "sub.subname":psub},{$push:{"sub.$.uttqus":js}})
       
    }
    else if(pdept === "Electrical And Electronics Engineering"){
        sub = await eeeModel.updateOne({sem:psem, "sub.subname":psub},{$push:{"sub.$.uttqus":js}})
        
    }
    else if(pdept === "Electronics And Communication Engineering"){
        sub = await eceModel.updateOne({sem:psem, "sub.subname":psub},{$push:{"sub.$.uttqus":js}})
    }
    else if(pdept === "Production Engineering"){
        sub = await prodModel.updateOne({sem:psem, "sub.subname":psub},{$push:{"sub.$.uttqus":js}})
    }
    else if(pdept === "Electronics And Instrumentation Engineering"){
        sub = await eandiModel.updateOne({sem:psem, "sub.subname":psub},{$push:{"sub.$.uttqus":js}})
    }
    else if(pdept === "Computer Science Engineering"){
        sub = await cseModel.updateOne({sem:psem, "sub.subname":psub},{$push:{"sub.$.uttqus":js}})
    }
    else if(pdept === "Information Technology"){
        sub = await itModel.updateOne({sem:psem, "sub.subname":psub},{$push:{"sub.$.uttqus":js}})
    }
    else if(pdept === "Industrial Bio Technology"){
        sub = await ibtModel.updateOne({sem:psem, "sub.subname":psub},{$push:{"sub.$.uttqus":js}})
    } 
    if(sub.modifiedCount == 0){
        res.send('faild')
    }else{
        res.send("success")
    }
    
})

module.exports = router