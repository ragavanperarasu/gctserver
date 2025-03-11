

const mongoose = require('mongoose')


var usersDB = mongoose.createConnection('mongodb+srv://ragavan:ragavan2004@vipworld.71hxkqc.mongodb.net/?retryWrites=true&w=majority&appName=vipworld');

var MessageModel = usersDB.model('message', new mongoose.Schema({
    title:String,
    subt:String,
    date:String,
    durl:String
}))



module.exports = MessageModel
