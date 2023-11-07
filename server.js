const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8080; 

// Connect to your MongoDB database
// mongoose.connect('mongodb+srv://toffeezhang:1JrqGw9UEGcQss2p@cluster0.bfhyfay.mongodb.net/?retryWrites=true&w=majority',
//{useNewUrlParser:true});

const dbUrl = 'mongodb+srv://toffeezhang:1JrqGw9UEGcQss2p@cluster0.bfhyfay.mongodb.net/?retryWrites=true&w=majority'; // Replace with your actual connection URL

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


// Define routes and API endpoints here
//const todoRoutes = require('./routes/routes');
const productRoutes = require('./routes/product.routes');

//app.use('/', todoRoutes);
app.use('/', productRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});