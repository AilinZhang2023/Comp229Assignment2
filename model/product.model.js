const mongoose = require('mongoose');
//const ObjectId = mongoose.Types.ObjectId;

const productSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true,
    unique: true, // Add this line to create a unique index
  },
  description:{ type: String}, //String,
  price: { type: Number }, //Number,
  quantity: { type: Number }, // Number,
  category: ["Men", "Women", "Teens"]//String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

