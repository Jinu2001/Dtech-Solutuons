// NavBar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './NavBar.css'; 


const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" style={{ background: 'white', color: 'black', padding: 0 }}>
      <Toolbar style={{ justifyContent: 'space-between', width: '100%', margin: 0 }}>
        <img class = "logo" src='.\src\assets\logo.png' alt="Logo"/>
        <Typography style = {{fontWeight : 'bold', fontSize : '25px'}} component="div" className="logo-text" sx={{ flexGrow: 1 }}>
          DTEC
        </Typography>
        
      
        {!isMobile && (
          <>
            <div>
              <Button className="nav-button" href="/">Home</Button>
              <Button className="nav-button" href="/about">About</Button>
              <Button className="nav-button" href="/services">Services</Button>
              <Button className="nav-button" href="/courses">Courses</Button>
            </div>
            <div style={{ flexGrow: 0, marginRight: '5%'}}></div>
            <Button className="nav-button" href="/register" style={{fontWeight:'700', marginRight: '15px', color:'black'}}>Sign in</Button>
            <Button className="nav-button-registerr" href="/register" style={{fontFamily:'sans-serif',fontWeight:'700', border: 'solid 2px #F4EBFF',borderRadius: '8px',color:'white', backgroundColor: '#1A87C9', height: '40px', padding:'20px'}}>Register for Free</Button>
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