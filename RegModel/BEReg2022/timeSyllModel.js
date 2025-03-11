

const mongoose = require('mongoose')


var usersDB = mongoose.createConnection('mongodb+srv://ragavan:ragavan2004@vipworld.71hxkqc.mongodb.net/?retryWrites=true&w=majority&appName=vipworld');

var TimeSyllModel = usersDB.model('timesyll2022', new mongoose.Schema({
    depname:String,
    sem:[
        {
            semno:String,
            timeurl:String,
            syllurl:String
        }
    ]
}))



module.exports = TimeSyllModel
