var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    // read all messages and return array of string contents
    get: function (req, res) {
      res.send();
    },
    // a function which handles posting a message to the database
    // 
    post: function (req, res) {
      res.send();
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.send();
    },
    post: function (req, res) {
      res.send();
    }
  }
};

