var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];

  console.log(process.env);
  Object.keys(envConfig).forEach((key) => {
    console.log(process.env[key]);
    console.log(envConfig[key]);
    process.env[key] = envConfig[key];
  });
  console.log(process.env);
}
