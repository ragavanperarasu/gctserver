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



router.post('/delstaffpro', async (req, res, next) => {
    const {mail, pin, dept} = req.body
    
        let staffDetail;

        if(dept === 'Civil Engineering'){
            staffDetail = await civilStaffColl.deleteOne({mail:mail, pin:pin})
        }
        else if(dept === 'Mechanical Engineering'){
            staffDetail = await mechStaffColl.deleteOne({mail:mail, pin:pin})
            
        }
        else if(dept === 'Electrical And Electronics Engineering'){
            staffDetail = await eeeStaffColl.deleteOne({mail:mail, pin:pin})
            
        }
        else if(dept === 'Electronics And Communication Engineering'){
            staffDetail = await eceStaffColl.deleteOne({mail:mail, pin:pin})
            
        }
        else if(dept === 'Production Engineering'){
            staffDetail = await prodStaffColl.deleteOne({mail:mail, pin:pin})
            
        }
        else if(dept === 'Electronics And Instrumentation Engineering'){
            staffDetail = await eandiStaffColl.deleteOne({mail:mail, pin:pin})
            
        }
        else if(dept === 'Computer Science Engineering'){
            staffDetail = await cseStaffColl.deleteOne({mail:mail, pin:pin})
            
        }
        else if(dept === 'Information Technology'){
            staffDetail = await itStaffColl.deleteOne({mail:mail, pin:pin})
            
        }
        else if(dept === 'Industrial Bio Technology'){
            staffDetail = await ibtStaffColl.deleteOne({mail:mail, pin:pin})
            
        }
        else if(dept === 'Mathematics'){
            staffDetail = await mathsStaffColl.deleteOne({mail:mail, pin:pin})
            
        }
        else if(dept === 'Physics'){
            staffDetail = await physicsStaffColl.deleteOne({mail:mail, pin:pin})
            
        }
        else if(dept === 'Chemistry'){
            staffDetail = await chemStaffColl.deleteOne({mail:mail, pin:pin})
            
        }
        else if(dept === 'English'){
            staffDetail = await englishStaffColl.deleteOne({mail:mail, pin:pin})
            
        }
        else if(dept === 'Physical Education'){
            staffDetail = await phyeduStaffColl.deleteOne({mail:mail, pin:pin})
            
        }
        else if(dept === 'Science-Humanities'){
            staffDetail = await scihumStaffColl.deleteOne({mail:mail, pin:pin})
            
        }

        if (staffDetail.deletedCount > 0) {
            res.send("success")
        } else {
            res.send("faild")
        }
    
})

module.exports = router