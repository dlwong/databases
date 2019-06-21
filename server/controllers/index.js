var models = require('../models');
var connection = require('../db/index.js');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    // read all messages and return array of string contents
    get: function (req, res) {
      // make req async
      // res occurs on completion of async request
      models.messages.get(function(err, results) {
        if (err) {
          console.log('we had an error retrieving messages!');
          throw err;
        } else {
          res.json(results);
        }
      });
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
