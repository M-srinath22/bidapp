// src/components/LoginPage.js
import React from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  Card,
  CardContent,
  Link,
} from '@mui/material';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        backgroundColor: '#EDE8F5' // Set this to match the Sign Up page background color
      }}
    >
      <Card sx={{ padding: 3, boxShadow: 3, backgroundColor: '#333333' }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#C5A880' }}>
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#C5A880', // Gold border
                  },
                  '&:hover fieldset': {
                    borderColor: '#8697C4', // Change to the desired hover color
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#C5A880', // Keep gold on focus
                  },
                },
                input: { color: '#EDE8F5' }, // Input text color
                label: { color: '#ADBBDA' }, // Label color
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#C5A880', // Gold border
                  },
                  '&:hover fieldset': {
                    borderColor: '#8697C4', // Change to the desired hover color
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#C5A880', // Keep gold on focus
                  },
                },
                input: { color: '#EDE8F5' }, // Input text color
                label: { color: '#ADBBDA' }, // Label color
              }}
            />
            <FormControlLabel
              control={<Checkbox name="remember" color="primary" />}
              label="Remember me"
              sx={{ color: '#ADBBDA' }} // Label color for the checkbox
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#C5A880', color: '#000000' }}
            >
              Sign In
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, color: '#8697C4' }}>
              <Link href="#" variant="body2" sx={{ color: '#ADBBDA' }}>
                Forgot password?
              </Link>
              <Link href="/signup" variant="body2" sx={{ color: '#ADBBDA' }}>
                Don't have an account? Sign Up
              </Link>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginPage;
