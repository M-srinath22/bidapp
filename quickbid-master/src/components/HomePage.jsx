// src/components/HomePage.jsx
import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSellClick = () => {
    navigate('/sell');
  };

  const handleBidClick = () => {
    navigate('/bid');
  };

  const handleAuctionClick = () => {
    navigate('/auction'); // Navigate to AuctionPage
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000000', // Black background for luxury
        padding: '2rem',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#C5A880', mb: 2 }}>
          LUXURY ANTIQUES
        </Typography>
        <Typography variant="h6" sx={{ color: '#FFFFFF' }}>
          Connect with antique lovers worldwide and sell or bid on rare, one-of-a-kind items.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {/* Sell Section */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#333333', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2, color: '#C5A880' }}>
                Sell Your Antiques
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#FFFFFF' }}>
                Have rare and valuable items? Get the best price by showcasing your antiques to a global audience.
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#C5A880', color: '#000000' }}
                onClick={handleSellClick}
              >
                Start Selling
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Bid Section */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#333333', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2, color: '#C5A880' }}>
                Bid on Antiques
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#FFFFFF' }}>
                Interested in owning rare items? Join auctions and bid on antiques from all around the world.
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#C5A880', color: '#000000' }}
                onClick={handleBidClick}
              >
                Start Bidding
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h5" sx={{ color: '#C5A880' }}>
          Bringing the world of antiques to your fingertips.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: '#C5A880', color: '#000000' }}
          onClick={handleAuctionClick}
        >
          View Auctions
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
