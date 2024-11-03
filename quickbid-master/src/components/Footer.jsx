// src/components/Footer.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#051622', // Dark background for classy feel (same as navbar)
        color: '#deb992', // Gold text for luxury feel
        padding: '1rem',
        textAlign: 'center' 
      }}
    >
      <Typography variant="body1">
        Contact Us: info@quickbid.com
      </Typography>

      <Box sx={{ mt: 1 }}>
        <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: '#deb992' }}> {/* Gold icons */}
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://www.youtube.com" target="_blank" sx={{ color: '#deb992' }}> {/* Gold icons */}
          <YouTubeIcon />
        </IconButton>
        <IconButton href="mailto:info@quickbid.com" sx={{ color: '#deb992' }}> {/* Gold icons */}
          <EmailIcon />
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ mt: 2 }}>
        &copy; 2024 Quick Bid. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
