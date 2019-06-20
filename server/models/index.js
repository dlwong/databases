var db = require('../db');
var connection = require('../db/index.js')

module.exports = {
  messages: {
    // a function which produces all the messages
    // needs to send request to read message contents from database
    // success callback will 'produce' ?? messages
    get: function () {
      connection.query('select * from messages;', function(err, rows, fields){
        if (err) {
          throw err;
        }
        console.log(rows[0]);
      })
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

