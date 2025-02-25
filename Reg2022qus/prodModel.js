

const mongoose = require('mongoose')


var usersDB = mongoose.createConnection('mongodb+srv://ragavan:ragavan2004@vipworld.71hxkqc.mongodb.net/?retryWrites=true&w=majority&appName=vipworld');

var BEReg2022qprodModel = usersDB.model('BEReg2022qprod', new mongoose.Schema({
    sem:String,
    sub:[
        {
            subname:String,
            semqus:[
                {
                    year:{ type: String, unique: true, required: true },
                    durl:String,
                    own:String
                }
            ],
            utoqus:[
                {
                    year:{ type: String, unique: true, required: true },
                    durl:String,
                    own:String
                }
            ],
            uttqus:[
                {
                    year:{ type: String, unique: true, required: true },
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



module.exports = BEReg2022qprodModel
