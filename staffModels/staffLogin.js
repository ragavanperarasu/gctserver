

const mongoose = require('mongoose')


var usersDB = mongoose.createConnection('mongodb+srv://ragavan:ragavan2004@vipworld.71hxkqc.mongodb.net/?retryWrites=true&w=majority&appName=vipworld');

var StaffLoginModel = usersDB.model('staffLogin', new mongoose.Schema({
    mail:String,
    pin:String,
    dept:String
}))



module.exports = StaffLoginModel