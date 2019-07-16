const mongoose = require('mongoose');



module.exports = (url = process.send.MONGODB_URI) => {

};

mongoose.connection.on('connected', () => {
  console.log('connected to mongoDB');
});

mongoose.connection.on('disconnected', () => {
  console.log('disconnected from mongoDB');
});
