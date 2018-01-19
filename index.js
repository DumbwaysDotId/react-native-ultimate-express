const express = require('express')

const app = express()

app.get('/', function(req, res){
  res.send({
    hello: "world"
  })
})

app.listen(5000, function(){
  console.log('express app now listening on port 5000')
})
