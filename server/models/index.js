var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    // needs to send request to read message contents from database
    // success callback will 'produce' ?? messages
    get: function (callback) {
      let query = 'select * from messages;';
      
      db.connection.query(query, function(err, results) {
        if (err) {
          console.log(err);
          callback(err);
        } else {
          callback(null, results);
        }
      });
    }, 
    // send message contents to server, no success callback
    // a function which can be used to insert a message into the database
    post: function () {
      let query = 'insert into messages (id, text) values (2, "hello")';

      db.connection.query(query, function(err, results) {
        if (err){
          callback(err);
        } else {
          callback(null, results);
        }
      })
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

