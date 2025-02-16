

const mongoose = require('mongoose')


var usersDB = mongoose.createConnection('mongodb+srv://ragavan:ragavan2004@vipworld.71hxkqc.mongodb.net/?retryWrites=true&w=majority&appName=vipworld');

var eandiStaffModel = usersDB.model('eandiStaff', new mongoose.Schema({
    name:String,
    deg:String,
    des:String,
    dept:String,
    mob:{ type: String, unique: true, required: true },
    mail:{ type: String, unique: true, required: true },
    cpurl:String,
    ciurl:String,
    pin:String,
    cdate:String,
    post:[
        {
            sub:String,
            ptitle:String,
            sem:String,
            dep:String,
            drive:String
        }
    ]
}))



module.exports = eandiStaffModel
