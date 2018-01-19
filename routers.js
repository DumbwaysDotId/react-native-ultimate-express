const express = require('express')
const router = express.Router()

router.get('/todos', function(req, res){
  res.send({
    message: "todos lists"
  })
})

router.post('/todos', function(req, res){
  res.send('POSTS a todos')
})

router.get('/todos/:id', function(req, res){
  res.send('GET a Todo')
})

router.patch('/todos/:id', function(req, res){
  res.send('PATCH a todos')
})

router.delete('/todos/:id', function(req, res){
  res.send('DELETE a todos')
})

module.exports = router
