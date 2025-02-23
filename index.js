const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const newstaff = require('./staffRoutes/newStaff.js')
const staffLogin = require('./staffRoutes/staffLogin.js')
const BeSub2022 = require('./staffRoutes/BeSub2022.js')
const staffNewPost = require('./staffRoutes/staffNewPost.js')
const getstaffpro = require('./staffRoutes/getStaffPor.js')
const delstaffpro = require('./staffRoutes/delStaffPro.js')

const replogin = require('./repRoutes/repLoginRoute.js')
const repqusupl = require('./repRoutes/repQusUpl.js')
const repqusche = require('./repRoutes/repQusChe.js')

const reputoqusche = require('./repRoutes/reputoQusChe.js')
const reputoqusupl = require('./repRoutes/reputoQusUpl.js')

const reputtqusche = require('./repRoutes/reputtQusChe.js')
const reputtqusupl = require('./repRoutes/reputtQusUpl.js')

const repyoutubeupl = require('./repRoutes/repYoutubeUpl.js')
const repsnoteupl = require('./repRoutes/repSnoteUpl.js')

const app = express()
const port = 5000


app.use(cors({ credentials: true}))
app.use(bodyParser.json({limit:'10mb'}))
app.use(bodyParser.urlencoded({extended:true, limit:'10mb'}))

app.use('/',newstaff)
app.use('/',staffLogin)
app.use('/',BeSub2022)
app.use('/',staffNewPost)
app.use('/',getstaffpro)
app.use('/',delstaffpro)
app.use('/',replogin)
app.use('/',repqusupl)
app.use('/',repqusche)
app.use('/',reputoqusche)
app.use('/',reputoqusupl)

app.use('/',reputtqusche)
app.use('/',reputtqusupl)

app.use('/',repyoutubeupl)

app.use('/',repsnoteupl)

app.get('/', (req, res) => {
  res.send('Hello!')
})




app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
