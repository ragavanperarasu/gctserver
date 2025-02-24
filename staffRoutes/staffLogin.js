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

const saffLoginColl = require('../staffModels/staffLogin') 



router.post('/stafflogin', async (req, res, next) => {
    const { mail, pin } = req.body
    const lmail = mail.toLowerCase();
    const loginData = await saffLoginColl.findOne({mail:lmail,pin:pin})
 
    if(loginData == null){
        res.send('not valid')
    }else{
        const dept = loginData.dept;
        let staffDetail;
        if(dept === 'Civil Engineering'){
            staffDetail = await civilStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
        else if(dept === 'Mechanical Engineering'){
            staffDetail = await mechStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
        else if(dept === 'Electrical And Electronics Engineering'){
            staffDetail = await eeeStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
        else if(dept === 'Electronics And Communication Engineering'){
            staffDetail = await eceStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
        else if(dept === 'Production Engineering'){
            staffDetail = await prodStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
        else if(dept === 'Electronics And Instrumentation Engineering'){
            staffDetail = await eandiStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
        else if(dept === 'Computer Science Engineering'){
            staffDetail = await cseStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
        else if(dept === 'Information Technology'){
            staffDetail = await itStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
        else if(dept === 'Industrial Bio Technology'){
            staffDetail = await ibtStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
        else if(dept === 'Mathematics'){
            staffDetail = await mathsStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
        else if(dept === 'Physics'){
            staffDetail = await physicsStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
        else if(dept === 'Chemistry'){
            staffDetail = await chemStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
        else if(dept === 'English'){
            staffDetail = await englishStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
        else if(dept === 'Physical Education'){
            staffDetail = await phyeduStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
        else if(dept === 'Science-Humanities'){
            staffDetail = await scihumStaffColl.findOne({mail:lmail})
            res.send(staffDetail)
        }
    }
})

module.exports = router