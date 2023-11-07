const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');


// Route for getting all products (GET)
router.get('/api/products', productController.getAllProducts);
// Route for getting product by ID (GET)
router.get('/api/products/:id', productController.getProductById);
// Route for adding a new product (POST)
router.post('/api/products', productController.createProduct);
// Route for updating a product (PUT)
router.put('/api/products/:id', productController.updateProduct);
// Route for deleting a product (DELETE)
router.delete('/api/products/:id', productController.deleteProduct);
// Route for removing all products (DELETE)
router.delete('/api/products', productController.deleteAllProducts);
// Route for getting products by name (GET)
router.get('/api/products', productController.getProductsByName);

router.get('/', (req, res) => {
    const message = { message: 'Welcome to DressStore application' };
    res.json(message);
  });

// Define other routes for get all products, get product by ID, update, and delete

module.exports = router;
