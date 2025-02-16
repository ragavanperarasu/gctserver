const express = require("express");
const router = express.Router();

const civilStaffColl = require("../staffModels/civilStaff");
const mechStaffColl = require("../staffModels/mechStaff");
const eeeStaffColl = require("../staffModels/eeeStaff");
const eceStaffColl = require("../staffModels/eceStaff");
const prodStaffColl = require("../staffModels/prodStaff");
const eandiStaffColl = require("../staffModels/eandiStaff");
const itStaffColl = require("../staffModels/itStaff ");
const cseStaffColl = require("../staffModels/cseStaff");
const ibtStaffColl = require("../staffModels/ibtStaff");
const mathsStaffColl = require("../staffModels/mathsStaff");
const physicsStaffColl = require("../staffModels/physicsStaff");
const chemStaffColl = require("../staffModels/chemStaff");
const englishStaffColl = require("../staffModels/englishStaff");
const phyeduStaffColl = require("../staffModels/phyeduStaff");
const scihumStaffColl = require("../staffModels/scihumStaff");

const saffLoginColl = require("../staffModels/staffLogin");

router.post("/staffnewpost", async (req, res, next) => {
  const { sname, smail, sdept, ptitle, psub, pdept, psem, preg, drive } = req.body;
    console.log(req.body)
  if (sdept === "Civil Engineering") {
    staffDetail = await civilStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );
    

  } else if (sdept === "Mechanical Engineering") {
    staffDetail = await mechStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );

  } else if (sdept === "Electrical And Electronics Engineering") {
    staffDetail = await eeeStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );

  } else if (sdept === "Electronics And Communication Engineering") {
    staffDetail = await eceStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );

  } else if (sdept === "Production Engineering") {
    staffDetail = await prodStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );

  } else if (sdept === "Electronics And Instrumentation Engineering") {
    staffDetail = await eandiStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );

  } else if (sdept === "Computer Science Engineering") {
    console.log("cssssssssssssss")
    staffDetail = await cseStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );

    if (staffDetail.modifiedCount === 0) {
        console.log("faild")
        res.send("faild");
    } else {
        console.log("success")
        res.send("success");
    }
   
  } else if (sdept === "Information Technology") {
    staffDetail = await itStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );
   
  } else if (sdept === "Industrial Bio Technology") {
    staffDetail = await ibtStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );
    
  } else if (sdept === "Mathematics") {
    staffDetail = await mathsStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );
  
  } else if (sdept === "Physics") {
    staffDetail = await physicsStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );
    
  } else if (sdept === "Chemistry") {
    staffDetail = await chemStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );
   
  } else if (sdept === "English") {
    staffDetail = await englishStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );
    
  } else if (sdept === "Physical Education") {
    staffDetail = await phyeduStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );
 
  } else if (sdept === "Science-Humanities") {
    staffDetail = await scihumStaffColl.updateOne(
        { mail: smail },
        {$push : {post : {sub:psub, ptitle:ptitle, sem:psem, dep:pdept, drive:drive}} }
    );
  }

  

});

module.exports = router;
