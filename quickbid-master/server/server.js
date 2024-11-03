// server.js

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const Product = require('./models/product'); // Ensure this path is correct

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use('/uploads', express.static('uploads')); // Serve the uploaded files

// Set up multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files to uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp
  },
});
const upload = multer({ storage: storage });

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/quickbid', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// API route to add a product
app.post('/api/products/add', upload.single('image'), async (req, res) => {
  const { name, description, price } = req.body;

  // Check if the image file is provided
  if (!req.file) {
    return res.status(400).json({ error: 'Image file is required' });
  }

  const imageURL = req.file.path; // Get the image path from multer

  const newProduct = new Product({
    name,
    description,
    price,
    image: imageURL, // Match the field with the model's field
  });

  try {
    const savedProduct = await newProduct.save(); // Save product to DB
    res.status(201).json(savedProduct); // Respond with the saved product
  } catch (error) {
    console.error('Error saving product:', error);
    res.status(500).json({ error: 'Failed to add product' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
