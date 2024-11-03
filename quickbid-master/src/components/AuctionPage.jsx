// src/components/AuctionPage.jsx
import React from 'react';
import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';

const AuctionPage = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 4, color: '#C5A880' }}>
        Current Auctions
      </Typography>
      <Grid container spacing={4}>
        {/* Example Auction Item */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#333', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2, color: '#C5A880' }}>
                Rare Antique Vase
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#fff' }}>
                A beautifully crafted ancient vase from the Ming dynasty. Current Bid: $5,000.
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: '#C5A880', color: '#000' }}>
                Place a Bid
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* More auction items can be added here */}
      </Grid>
    </Box>
  );
};

export default AuctionPage;
