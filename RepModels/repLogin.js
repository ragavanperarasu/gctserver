

const mongoose = require('mongoose')


var usersDB = mongoose.createConnection('mongodb+srv://ragavan:ragavan2004@vipworld.71hxkqc.mongodb.net/?retryWrites=true&w=majority&appName=vipworld');

var repLoginModel = usersDB.model('repLogin', new mongoose.Schema({
    name:String,
    mail:{ type: String, unique: true, required: true },
    pin:String,
    dept:String,
    year:String,
    purl:String,
    iurl:String
}))



module.exports = repLoginModel