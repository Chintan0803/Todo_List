require('dotenv').config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/todo_list',
  PORT: process.env.PORT || 5000
};