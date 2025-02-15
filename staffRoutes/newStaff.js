const express = require('express')
const router = express.Router()
const civilStaffColl = require('../staffModels/civilStaff')
const mechStaffColl = require('../staffModels/mechStaff')
const eeeStaffColl = require('../staffModels/eeeStaff')
const eceStaffColl = require('../staffModels/eceStaff')
const prodStaffColl = require('../staffModels/prodStaff')
const eandiStaffColl = require('../staffModels/eandiStaff')
const itStaffColl = require('../staffModels/itStaff ')
const cseStaffColl = require('../staffModels/cseStaff')
const ibtStaffColl = require('../staffModels/ibtStaff')
const mathsStaffColl = require('../staffModels/mathsStaff')
const physicsStaffColl = require('../staffModels/physicsStaff')
const chemStaffColl = require('../staffModels/chemStaff')
const englishStaffColl = require('../staffModels/englishStaff')
const phyeduStaffColl = require('../staffModels/phyeduStaff')
const scihumStaffColl = require('../staffModels/scihumStaff')

const staffLoginColl = require('../staffModels/staffLogin')

router.post('/newstaff', async (req, res, next) => {
    const { name, deg, des, dept, mob, mail, cpurl, ciurl, pin } = req.body
    if(dept === "Civil Engineering"){
        await civilStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    else if(dept === "Mechanical Engineering"){
        await mechStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    else if(dept === "Electrical And Electronics Engineering"){
        await eeeStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    else if(dept === "Electronics And Communication Engineering"){
        await eceStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    else if(dept === "Production Engineering"){
        await prodStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    else if(dept === "Electronics And Instrumentation Engineering"){
        await eandiStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    else if(dept === "Computer Science Engineering"){
        await cseStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    else if(dept === "Information Technology"){
        await itStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    else if(dept === "Industrial Bio Technology"){
        await ibtStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    else if(dept === "Mathematics"){
        await mathsStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    else if(dept === "Physics"){
        await physicsStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    else if(dept === "Chemistry"){
        await chemStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    else if(dept === "English"){
        await englishStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    else if(dept === "Physical Education"){
        await phyeduStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    else if(dept === "Science-Humanities"){
        await scihumStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:mail, cpurl:cpurl, ciurl:ciurl, pin:pin})
        await staffLoginColl.create({mail:mail,pin:pin,dept:dept})
    }
    
    console.log(req.body)
    res.send("success")
})

module.exports = router

