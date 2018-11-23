var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Login = new Schema({
  userName: {
    type: String
  },
  password: {
    type: String
  }
},{
    collection: 'login'
});

module.exports = mongoose.model('Login', Login);