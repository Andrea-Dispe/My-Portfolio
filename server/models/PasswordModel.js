const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passwordSchema = new Schema({
  hashedPassword: {
    type: String,
    required: true
  },
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      currentTime: () => new Date().toLocaleString()
    }
  }
)

module.exports = mongoose.model('Password', passwordSchema);
