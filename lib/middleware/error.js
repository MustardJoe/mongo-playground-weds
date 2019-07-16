const mongoose = require('mongoose');

module.exports = (err, req, res, next) => {
  const status = err.status || 500;

  if(err instanceof mongoose.Error.ValidationError) 

  
};
