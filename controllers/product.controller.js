const Product = require('../model/product.model');

// Get all products

const getAllProducts = (req, res) => {
  Product.find({})
    .then((products) => { res.status(200).json(products);})
      .catch((err) => { res.status(500).json({ "error": err});
    });
};

 // Get a product by ID
const getProductById = (req, res) => {
  const productId = req.params.id;
  Product.findById(productId)
    .then((products) => {
      if (!products) {
        res.status(404).json({ "error": err});
      } else {
        res.status(200).json(products);
      }
    })
      .catch((err) => {
         res.status(500).json({ "error": err});
      });
};
// Create a new product
const createProduct = (req, res) => {
  const { name, description, price, quantity, category } = req.body;
  const product = new Product({ name, description, price, quantity, category });
  product.save()
    //.then((product) => {res.status(201).json("Product created");})
    .then((products) => {res.status(201).json(products,);})
      .catch((err) => { res.status(500).json({ "error": err});
    });
};

//  Update a product
const updateProduct = (req, res) => {
  const productId = req.params.id;
  const { name, description, price, quantity, category } = req.body;

  Product.findByIdAndUpdate(productId, { name, description, price, quantity, category })
    .then((products) => {
      if (!products) {
        res.status(404).json({ "error": err});
      } else {
        res.status(200).json({products});
      }
    })
      .catch((err) => { res.status(500).json({ "error": err}); });
};

// Delete a product
const deleteProduct = (req, res) => {
  const productId = req.params.id;

  Product.findByIdAndDelete(productId)
    .then((products) => {
      if (!products) {
        res.status(404).json({ "error": err});
      } else {
        res.status(200).json({ products });
      }
    })
      .catch((err) => { res.status(500).json({ "error":err}); });
};

// Delete all products
const deleteAllProducts = (req, res) => {
  Product.deleteMany({})
    .then(() => {
      res.status(200).json({ message: 'Products deleted successfully' });
    })
      .catch((err) => { res.status(500).json({ "error": err});});
};

//  Find products by name

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
  //getAllPublishedProducts,
  //getProductsByName,
  // Define other controller functions for CRUD operations
};