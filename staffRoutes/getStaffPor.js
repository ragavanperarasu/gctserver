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



router.post('/getstaffpro', async (req, res, next) => {
    const {mail, pin, dept} = req.body
    
        let staffDetail;

        if(dept === 'Civil Engineering'){
            staffDetail = await civilStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
        else if(dept === 'Mechanical Engineering'){
            staffDetail = await mechStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
        else if(dept === 'Electrical And Electronics Engineering'){
            staffDetail = await eeeStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
        else if(dept === 'Electronics And Communication Engineering'){
            staffDetail = await eceStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
        else if(dept === 'Production Engineering'){
            staffDetail = await prodStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
        else if(dept === 'Electronics And Instrumentation Engineering'){
            staffDetail = await eandiStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
        else if(dept === 'Computer Science Engineering'){
            staffDetail = await cseStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
        else if(dept === 'Information Technology'){
            staffDetail = await itStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
        else if(dept === 'Industrial Bio Technology'){
            staffDetail = await ibtStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
        else if(dept === 'Mathematics'){
            staffDetail = await mathsStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
        else if(dept === 'Physics'){
            staffDetail = await physicsStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
        else if(dept === 'Chemistry'){
            staffDetail = await chemStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
        else if(dept === 'English'){
            staffDetail = await englishStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
        else if(dept === 'Physical Education'){
            staffDetail = await phyeduStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
        else if(dept === 'Science-Humanities'){
            staffDetail = await scihumStaffColl.findOne({mail:mail, pin:pin})
            res.send(staffDetail)
        }
    
})

module.exports = router