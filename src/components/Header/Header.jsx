// Header/Header.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box  py={10} sx={{ width: { xs: '100%', sm: '80%', md: '70%' ,lg:'40%'}, marginLeft: '5%' }}>
      <Typography variant="h2" style={{fontWeight:'bolder'}}>Up Your <span style={{color:'#1B86C8'}}>SKills</span> <br /> To <span style={{color:'#1B86C8'}}>Advance</span>  Your <br /> <span style={{color:'#1B86C8'}}>Career</span> Path</Typography>
      <Typography variant="subtitle1" mt={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum aspernatur vero sint molestias sunt molestiae eos pariatur voluptates beatae quaerat consectetur magni, minima minus velit cumque ipsa. Neque, odit?
      </Typography>
    </Box>
  );
};

export default Header;
