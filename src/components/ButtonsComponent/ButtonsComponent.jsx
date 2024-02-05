import React from 'react';
import Button from '@mui/material/Button';
import { Stack, useTheme, useMediaQuery } from '@mui/material';

const ButtonsComponent = () => {
  const theme = useTheme();
  // This will be true if the screen width is less than or equal to small size defined in the theme
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Conditional style based on the screen size
  const stackStyle = isSmallScreen ? { width: '100%', justifyContent: 'center'} : { marginLeft: '10%' };

  return (
    <Stack direction="row" spacing={2} sx={stackStyle}>
      <Button variant="contained" color="primary" sx={{ textTransform: 'none'}}>
        Get Started
      </Button>
      <Button variant="outlined" color="primary" sx={{ textTransform: 'none', backgroundColor: '#E1F4FF', color: '#084674' }}>
        Get free trial
      </Button>
    </Stack>
  );
};

export default ButtonsComponent;
