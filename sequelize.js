//connection
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root@localhost:3306/not_to_do_list');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

module.exports = sequelize  
