var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
console.log('******');
console.log(process.env);
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
});

module.exports = {mongoose};
