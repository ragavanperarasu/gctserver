const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const newstaff = require('./staffRoutes/newStaff.js')
const staffLogin = require('./staffRoutes/staffLogin.js')
const BeSub2022 = require('./staffRoutes/BeSub2022.js')


const app = express()
const port = 5050


app.use(cors({ credentials: true}))
app.use(bodyParser.json({limit:'10mb'}))
app.use(bodyParser.urlencoded({extended:true, limit:'10mb'}))

app.use('/',newstaff)
app.use('/',staffLogin)
app.use('/',BeSub2022)

app.get('/', (req, res) => {
  res.send('Hello!')
})




app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})