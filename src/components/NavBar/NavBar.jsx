// NavBar.js

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, TextField, InputAdornment, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './NavBar.css'; 

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform additional search-related logic with searchTerm if needed
    console.log("Searching for:", searchTerm);
  };

  return (
    <AppBar position="static" style={{ background: 'white', color: 'black', padding: 0 }}>
      <Toolbar style={{ justifyContent: 'space-between', width: '100%', margin: 0 }}>
        <img className="logo" src='.\src\assets\logo.png' alt="Logo"/>
        <Typography style={{ fontWeight: 'bold', fontSize: '25px' }} component="div" className="logo-text" sx={{ flexGrow: 1 }}>
          DTEC
        </Typography>

        {!isMobile && (
          <>
            <div style={{ flexGrow: 5, marginRight: '5%' }}>
              <TextField
                placeholder="    Want to Learn?"
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', marginLeft: '10px', height: '40px' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSearch}
                        style={{height: '25px', backgroundColor: '#FffffF', color: '#1B86C8',marginRight: '0px'}}
                      >
                        Explore
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <Button className="nav-button" href="/">Home</Button>
              <Button className="nav-button" href="/about">About</Button>
              <Button className="nav-button" href="/services">Services</Button>
              <Button className="nav-button" href="/courses">Courses</Button>
            </div>
            <Button className="nav-button" href="/register" style={{ fontWeight: '700', marginLeft: '30px', color: 'black' }}>Sign in</Button>
            <Button className="nav-button-register" href="/register" style={{ fontFamily: 'sans-serif', fontWeight: '400', border: 'solid 2px #F4EBFF', borderRadius: '8px', color: 'white', backgroundColor: '#1A87C9', height: '40px', padding: '10px' }}>Register for Free</Button>
          </>
        )}
        {isMobile && (
          <>
            <IconButton color="inherit" style={{ marginLeft: 'auto' }}>
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
