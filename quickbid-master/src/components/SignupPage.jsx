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
        backgroundColor: 'transparent', // Black background for luxury feel
      }}
    >
      <Card sx={{ padding: 3, boxShadow: 3, backgroundColor: '#1a1a1a' }}>
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: '#C5A880' }} // Gold color for header
          >
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              InputLabelProps={{ style: { color: '#C5A880' } }} // Gold label
              InputProps={{
                style: { color: '#FFFFFF' }, // White input text
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#C5A880', // Gold border for input fields
                  },
                  '&:hover fieldset': {
                    borderColor: '#FFD700', // Lighter gold on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FFD700',
                  },
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              InputLabelProps={{ style: { color: '#C5A880' } }} // Gold label
              InputProps={{
                style: { color: '#FFFFFF' }, // White input text
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#C5A880', // Gold border
                  },
                  '&:hover fieldset': {
                    borderColor: '#FFD700', // Lighter gold on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FFD700',
                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox name="remember" color="default" />}
              label="Remember me"
              sx={{
                color: '#C5A880', // Gold checkbox label
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#C5A880', // Gold button
                color: '#000000',
                '&:hover': {
                  backgroundColor: '#FFD700', // Lighter gold on hover
                },
              }}
            >
              Sign In
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Link href="#" variant="body2" sx={{ color: '#C5A880' }}>
                Forgot password?
              </Link>
              <Link href="/signup" variant="body2" sx={{ color: '#C5A880' }}>
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
