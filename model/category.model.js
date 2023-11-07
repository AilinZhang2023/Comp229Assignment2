const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {type: String} //String,
});

module.exports = mongoose.model('Categories', categorySchema);
