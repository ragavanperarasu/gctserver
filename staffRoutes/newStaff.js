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
    const { name, deg, des, dept, mob, mail, cpurl, ciurl, pin, cdate } = req.body
    
    
    const lmail = mail.toLowerCase();
    let scc;
    let scl;

    try{
    if(dept === "Civil Engineering"){
        scc = await civilStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    else if(dept === "Mechanical Engineering"){
        scc = await mechStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    else if(dept === "Electrical And Electronics Engineering"){
        scc = await eeeStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    else if(dept === "Electronics And Communication Engineering"){
        scc = await eceStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    else if(dept === "Production Engineering"){
        scc = await prodStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    else if(dept === "Electronics And Instrumentation Engineering"){
        scc = await eandiStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    else if(dept === "Computer Science Engineering"){
        scc = await cseStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    else if(dept === "Information Technology"){
        scc = await itStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    else if(dept === "Industrial Bio Technology"){
        scc = await ibtStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    else if(dept === "Mathematics"){
        scc = await mathsStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    else if(dept === "Physics"){
        scc = await physicsStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    else if(dept === "Chemistry"){
        scc = await chemStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    else if(dept === "English"){
        scc = await englishStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    else if(dept === "Physical Education"){
        scc = await phyeduStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    else if(dept === "Science-Humanities"){
        scc = await scihumStaffColl.create({name:name,deg:deg, des:des, dept:dept, mob:mob, mail:lmail, cpurl:cpurl, ciurl:ciurl, pin:pin, cdate:cdate})
        scl = await staffLoginColl.create({mail:lmail,pin:pin,dept:dept})
    }
    res.send("success")
}
catch (error){
    if (error.code === 11000) { 
        if (error.keyPattern.mob) {
            res.send("mobile number already exists") 
        } 
        else if (error.keyPattern.mail) {
            res.send("mail already exists")
        }
    } else {
        console.log("Error:", error.message);
    }
}

    
    
    
})

module.exports = router

