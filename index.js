const express = require('express')
const routers = require('./routers')

const app = express()

//init body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

//init routers
app.use('/api', routers)

app.listen(5000, function(){
  console.log('express app now listening on port 5000')
})
