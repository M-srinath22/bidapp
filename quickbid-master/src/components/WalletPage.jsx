import React, { useState } from 'react';
import { Box, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Typography, Card, CardContent } from '@mui/material';

const WalletPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardDetailsChange = (event) => {
    setCardDetails({
      ...cardDetails,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (paymentMethod === 'upi') {
      console.log(`UPI Payment Selected. UPI ID: ${upiId}`);
      // Implement UPI payment logic or placeholder here
    } else if (paymentMethod === 'card') {
      console.log(`Card Payment Selected. Card Details:`, cardDetails);
      // Implement card payment logic or placeholder here
    }
  };

  return (
    <Box sx={{ padding: '3rem', maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4, color: '#1ba098' }}>
        Wallet Payment Options
      </Typography>

      <Card sx={{ padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
        <CardContent>
          <FormControl component="fieldset" sx={{ mb: 4 }}>
            <FormLabel component="legend" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 2, color: '#051622' }}>
              Select Payment Method
            </FormLabel>
            <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange} sx={{ display: 'flex', flexDirection: 'row' }}>
              <FormControlLabel value="upi" control={<Radio />} label="UPI" sx={{ color: '#051622', mr: 3 }} />
              <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" sx={{ color: '#051622' }} />
            </RadioGroup>
          </FormControl>

          {paymentMethod === 'upi' && (
            <Box sx={{ mb: 4 }}>
              <TextField
                label="Enter UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: '#fff', borderRadius: '8px' }}
              />
            </Box>
          )}

          {paymentMethod === 'card' && (
            <Box>
              <TextField
                label="Card Number"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardDetailsChange}
                fullWidth
                variant="outlined"
                sx={{ mb: 2, backgroundColor: '#fff', borderRadius: '8px' }}
              />
              <TextField
                label="Expiry Date (MM/YY)"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleCardDetailsChange}
                fullWidth
                variant="outlined"
                sx={{ mb: 2, backgroundColor: '#fff', borderRadius: '8px' }}
              />
              <TextField
                label="CVV"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardDetailsChange}
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: '#fff', borderRadius: '8px' }}
              />
            </Box>
          )}

          <Button
            variant="contained"
            onClick={handleSubmit}
            fullWidth
            sx={{
              mt: 4,
              backgroundColor: '#deb992',
              color: '#051622',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#c5a880',
              },
              padding: '10px 0',
              borderRadius: '8px',
            }}
          >
            Submit Payment
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WalletPage;
