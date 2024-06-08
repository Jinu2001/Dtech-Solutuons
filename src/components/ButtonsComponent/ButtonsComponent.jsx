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
      
      <Button
  variant="contained"
  sx={{
    textTransform: 'none',
    background: 'linear-gradient(45deg, #ffa04f 30%, #1b86c8 90%)',
    color: '#fff',
    boxShadow: '0 3px 5px 2px rgba(132, 169, 255, .3)',
    borderRadius: '12px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      background: 'linear-gradient(45deg, #84A9FF 30%, #E1F4FF 90%)',
      transform: 'scale(1.05)',
    }
  }}
>
  Join my WhatsApp group here
</Button>

    </Stack>
  );
};

export default ButtonsComponent;
