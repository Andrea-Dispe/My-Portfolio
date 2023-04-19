const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TranslationSchema = new Schema({
  lang: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  sourceCodeUrl: {
    type: String,
    required: true
  },
  projectShowUrl: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      currentTime: () => new Date().toLocaleString()
    }
  }
)

module.exports = mongoose.model('translations', TranslationSchema);
