const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['rings', 'necklaces', 'bracelets', 'earrings', 'watches'],
    required: true
  },
  material: {
    type: String,
    enum: ['gold', 'silver', 'platinum', 'diamond', 'gemstone'],
    required: true
  },
  image: {
    type: String,
    required: true
  },
  images: [String],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: [{
    userId: mongoose.Schema.Types.ObjectId,
    comment: String,
    rating: Number,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  stock: {
    type: Number,
    default: 0
  },
  sku: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
