const express = require('express')
const routers = require('./routers')

const app = express()

app.use('/api', routers)

app.listen(5000, function(){
  console.log('express app now listening on port 5000')
})
