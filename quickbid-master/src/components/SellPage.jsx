import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SellPage = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProduct({
      ...product,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('image', product.image);

    try {
      const response = await axios.post('http://localhost:5000/api/products/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      // Check if the response indicates success
      if (response.status === 200) {
        console.log(response.data); // Log the response from the server
        toast.success('Product added successfully!'); // Show success toast
        setProduct({ name: '', description: '', price: '', image: null }); // Reset form fields
        navigate('/'); // Redirect to home page
      } else {
        throw new Error('Unexpected response status'); // Trigger error handling for unexpected status
      }
    } catch (error) {
      console.error('Error adding product:', error.response ? error.response.data : error.message); // Handle error
      toast.error('Failed to add product.'); // Show error toast
    }
  };

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
      <ToastContainer />
      <Typography variant="h4" sx={{ mb: 3, color: '#C5A880' }}>
        Sell Your Antique
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
          required
        />
        <TextField
          label="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
          required
        />
        <TextField
          label="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
          fullWidth
          type="number"
          sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
          required
        />
        <Button
          variant="contained"
          component="label"
          sx={{ backgroundColor: '#C5A880', color: '#000', mb: 2 }}
        >
          Upload Product Image
          <input type="file" hidden onChange={handleImageUpload} accept="image/*" />
        </Button>
        {product.image && (
          <Typography variant="body2" sx={{ color: '#C5A880' }}>
            {product.image.name}
          </Typography>
        )}
        <Button variant="contained" type="submit" sx={{ backgroundColor: '#C5A880', color: '#000' }}>
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default SellPage;
