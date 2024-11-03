// src/components/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HomeIcon from '@mui/icons-material/Home'; // Import Home Icon
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#051622' }}> {/* Dark background for navbar */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#deb992' }}> {/* Gold text for title */}
          QUICK BID
        </Typography>

        {/* Home Button with Icon */}
        <IconButton sx={{ color: '#deb992' }} onClick={() => navigate('/')}> {/* Gold icon for Home */}
          <HomeIcon />
        </IconButton>
        <Button sx={{ color: '#deb992', marginLeft: '0.5rem' }} onClick={() => navigate('/')}> {/* Gold text */}
          Home
        </Button>

        {/* E-Wallet Button with Icon */}
        <IconButton sx={{ color: '#deb992' }} onClick={() => navigate('/wallet')}> {/* Gold icon */}
          <AccountBalanceWalletIcon />
        </IconButton>
        <Button sx={{ color: '#deb992', marginLeft: '0.5rem' }} onClick={() => navigate('/wallet')}> {/* Gold text */}
          E-Wallet
        </Button>

        {/* Login Button with Icon */}
        <IconButton sx={{ color: '#deb992' }} onClick={() => navigate('/login')}> {/* Gold icon */}
          <LoginIcon />
        </IconButton>
        <Button sx={{ color: '#deb992', marginLeft: '0.5rem' }} onClick={() => navigate('/login')}> {/* Gold text */}
          Login
        </Button>

        {/* Signup Button with Icon */}
        <IconButton sx={{ color: '#deb992' }} onClick={() => navigate('/signup')}> {/* Gold icon */}
          <PersonAddIcon />
        </IconButton>
        <Button sx={{ color: '#deb992', marginLeft: '0.5rem' }} onClick={() => navigate('/signup')}> {/* Gold text */}
          Signup
        </Button>

        {/* Profile Button with Icon and Dropdown Menu */}
        <IconButton sx={{ color: '#deb992' }} onClick={handleProfileClick}> {/* Gold icon */}
          <AccountCircleIcon />
        </IconButton>
        <Button sx={{ color: '#deb992', marginLeft: '0.5rem' }} onClick={handleProfileClick}> {/* Gold text */}
          Profile
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              backgroundColor: '#051622',  // Dark background for the dropdown menu
              color: '#deb992',  // Gold text color
            },
          }}
        >
          <MenuItem 
            sx={{
              '&:hover': { 
                backgroundColor: '#1ba098', // Teal hover effect for a distinctive touch
                color: '#deb992',
              },
            }} 
            onClick={() => { handleClose(); navigate('/personal-info'); }}
          >
            Personal Info
          </MenuItem>
          <MenuItem 
            sx={{
              '&:hover': { 
                backgroundColor: '#1ba098', 
                color: '#deb992',
              },
            }} 
            onClick={() => { handleClose(); navigate('/order-history'); }}
          >
            Order History
          </MenuItem>
          <MenuItem 
            sx={{
              '&:hover': { 
                backgroundColor: '#1ba098', 
                color: '#deb992',
              },
            }} 
            onClick={() => { handleClose(); navigate('/sold-history'); }}
          >
            Sold History
          </MenuItem>
          <MenuItem 
            sx={{
              '&:hover': { 
                backgroundColor: '#1ba098', 
                color: '#deb992',
              },
            }} 
            onClick={() => { handleClose(); navigate('/contact-info'); }}
          >
            Contact Info
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
