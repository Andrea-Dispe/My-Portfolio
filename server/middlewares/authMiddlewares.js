const Password = require('../models/PasswordModel');
const bcrypt = require('bcrypt');


const authMiddlewares = async (req, res, next) => {
  const { password } = req.body;

  let passwordInDB;
  try {
    // since there is only one and this is used only by me for now I go on like this
    passwordInDB = await Password.findOne()
  } catch (error) {
    console.error(error)
  }

  // VALIDATE PASSWORD
  let isPasswordsValid;
  try {
    isPasswordsValid = await bcrypt.compare(password, passwordInDB.hashedPassword);
  } catch (error) {
    console.error(error)
  }

  if(isPasswordsValid) {
    next()
  } else {
    res.send('sorry the password is invalid')
  }
}

module.exports = authMiddlewares;