

const mongoose = require('mongoose')


var usersDB = mongoose.createConnection('mongodb+srv://ragavan:ragavan2004@vipworld.71hxkqc.mongodb.net/?retryWrites=true&w=majority&appName=vipworld');

var BEReg2022eandiModel = usersDB.model('BEReg2022eandi', new mongoose.Schema({
    sem:String,
    sub:[
        {
            key:String,
            value:String
        }
    ]
}))



module.exports = BEReg2022eandiModel
