const Todos = sequelize.define('todos', {
  name: {
    type: Sequelize.STRING
  },
  isDone: {
    type: Sequelize.BOOLEAN
  },
})

module.exports Todos
