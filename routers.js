const express = require('express')
const router = express.Router()
const Todos = require('./models/Todos')

router.get('/todos', async function(req, res){
  // Todos.findAll().then((todos)=>{
  //   res.send(todos)
  // })

  const todos = await Todos.findAll()
  res.send(todos)
})

router.post('/todos', function(req, res){
  const data = req.body
  res.send({
    name: data.name,
    description: data.description
  })
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
