// NavBar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css'; 

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" style={{ background: 'white', color: 'black', padding: 0 }}>
      <Toolbar style={{ justifyContent: 'space-between', width: '100%', margin: 0 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DTEC
        </Typography>
        {!isMobile && (
          <>
            <div style={{ marginLeft: 'auto' }}>
              <Button className="nav-button" href="/">Home</Button>
              <Button className="nav-button" href="/about">About</Button>
              <Button className="nav-button" href="/services">Services</Button>
              <Button className="nav-button" href="/courses">Courses</Button>
            </div>
            <div style={{ flexGrow: 0, marginRight: '3%' }}></div>
            <Button className="nav-button" href="/register">Register</Button>
          </>
        )}
        {isMobile && (
          <IconButton color="inherit" style={{ marginLeft: 'auto' }}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
