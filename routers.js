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

router.post('/todos', async function(req, res){
  const data = req.body
  const todo = await Todos.create(data)
  res.send(todo)
})

router.get('/todos/:id', async function(req, res){
  const todo = await Todos.findById(req.params.id)
  res.send(todo)
})

router.patch('/todos/:id', function(req, res){
  res.send('PATCH a todos')
})

router.delete('/todos/:id', function(req, res){
  res.send('DELETE a todos')
})

module.exports = router
