const bcrypt = require('bcrypt');
// MongoDB Models
const Password = require('../models/PasswordModel');

exports.savePassword = async (req, res) => {
  const { password } = req.body;

  // HASH PASSWORD
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 10);
  } catch (error) {
    console.error(error);
  }

  const newPassword = new Password({ hashedPassword })
  let result;
  try {
    result = await newPassword.save()
  } catch (error) {
    console.error(error)
  }

  result && res.send('Password save succesfully')


}
