const mongoose = require('mongoose');
const dotenv = require('../../client/node_modules/dotenv/lib/main');
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const startDB = () => {
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log('connected to the DB');
    })
    .catch((error) => {
      console.log(error);
      console.error(error.message);
    });
}

module.exports = startDB;