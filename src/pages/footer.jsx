import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import { styled, keyframes } from '@mui/system';

// Define the pulse animation using keyframes
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

// Create a styled IconButton that pulses
const PulsingIconButton = styled(IconButton)({
  animation: `${pulse} 1.5s infinite ease-in-out`,
});

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#101828', color: 'grey.300', pt: 3, pb: 2, position: 'relative' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" mb={1}>
              {/* <BusinessIcon sx={{ mr: 1, fontSize: '2.5rem', color: 'white' }} /> */}
              <Typography variant="h6" sx={{ color: 'white' }}>
                DTEC
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 1, color: '#EAECF0' }}>
              "Empowering innovation"
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOnIcon sx={{ width: '20px', height: '20px', mr: 1, color: '#EAECF0' }} />
              <Typography variant="body2" sx={{ color: '#EAECF0' }}>
                1234 Tech Road, Silicon Valley, CA
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <EmailIcon sx={{ width: '16px', height: '16px' , mr: 1, color: '#EAECF0' }} />
              <Typography variant="body2" sx={{ color: '#EAECF0' }}>
                contact@dtec.com
              </Typography>
            </Box>
          </Grid>
          {/* Placeholder for other footer content */}
        </Grid>
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          display: 'flex',
          gap: '16px',
          p: '8px',
          marginRight:"160px"
        }}>
          <PulsingIconButton color="inherit" href="https://twitter.com" target="_blank">
            <TwitterIcon sx={{ color: '#98A2B3' }} />
          </PulsingIconButton>
          <PulsingIconButton color="inherit" href="https://linkedin.com" target="_blank">
            <LinkedInIcon sx={{ color: '#98A2B3' }} />
          </PulsingIconButton>
          <PulsingIconButton color="inherit" href="https://facebook.com" target="_blank">
            <FacebookIcon sx={{ color: '#98A2B3' }} />
          </PulsingIconButton>
          <PulsingIconButton color="inherit" href="https://youtube.com" target="_blank">
            <YouTubeIcon sx={{ color: '#98A2B3' }} />
          </PulsingIconButton>
        </Box>
      </Container>
      <Typography variant="body2" color="#98A2B3" sx={{marginLeft:"160px" ,mt: 3, fontSize: "12px" }}>
        © 2024 DTEC. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
