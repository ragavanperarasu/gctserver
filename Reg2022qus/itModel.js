

const mongoose = require('mongoose')


var usersDB = mongoose.createConnection('mongodb+srv://ragavan:ragavan2004@vipworld.71hxkqc.mongodb.net/?retryWrites=true&w=majority&appName=vipworld');

var BEReg2022qitModel = usersDB.model('BEReg2022qit', new mongoose.Schema({
    sem:String,
    sub:[
        {
            subname:String,
            semqus:[
                {
                    year:String,
                    durl:String,
                    own:String
                }
            ],
            utoqus:[
                {
                    year:String,
                    durl:String,
                    own:String
                }
            ],
            uttqus:[
                {
                    year:String,
                    durl:String,
                    own:String
                }
            ],
            stunote:[
                {
                    name:String,
                    durl:String,
                    own:String
                }
            ],
            youtube:[
                {
                    cname:String,
                    curl:String
                }
            ]
        }
    ]
}))



module.exports = BEReg2022qitModel
