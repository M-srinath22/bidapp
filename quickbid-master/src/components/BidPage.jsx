import React from 'react';
import { Box, Typography, Card, CardContent, Button, CardMedia, Grid } from '@mui/material';

const BidPage = ({ bids }) => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 4, color: '#C5A880' }}>
        Current Auctions
      </Typography>
      <Grid container spacing={4}>
        {bids.length === 0 ? (
          <Typography variant="body1" sx={{ color: '#fff' }}>
            No products available for auction.
          </Typography>
        ) : (
          bids.map((bid, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ backgroundColor: '#333', boxShadow: 3 }}>
                {bid.imageURL && (
                  <CardMedia component="img" height="200" image={bid.imageURL} alt={bid.name} />
                )}
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 2, color: '#C5A880' }}>
                    {bid.name}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, color: '#fff' }}>
                    {bid.description}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, color: '#fff' }}>
                    Price: ${bid.price}
                  </Typography>
                  <Button variant="contained" sx={{ backgroundColor: '#C5A880', color: '#000' }}>
                    Place a Bid
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default BidPage;
