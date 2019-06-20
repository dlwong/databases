var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    // needs to send request to read message contents from database
    // success callback will 'produce' ?? messages
    get: function () {

    }, 
    // send message contents to server, no success callback
    // a function which can be used to insert a message into the database
    post: function () {
      
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

