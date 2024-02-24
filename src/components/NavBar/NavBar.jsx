// MergedNavBar.js

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, TextField, InputAdornment, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './MergedNavBar.css'; // Updated CSS import

const MergedNavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform additional search-related logic with searchTerm if needed
    console.log("Searching for:", searchTerm);
  };

  return (
    <AppBar position="static" className="merged-app-bar"> {/* Added a class for styling */}
      <Toolbar className="merged-toolbar">
        <img className="logo" src='.\src\assets\logo.png' alt="Logo"/>
        <Typography className="logo-text" component="div" sx={{ flexGrow: 1 }}>
          DTEC
        </Typography>

        {!isMobile && (
          <>
            <div className="search-container"> {/* Added a class for styling */}
              <TextField
                placeholder="    Want to Learn?"
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input" // Added a class for styling
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSearch}
                        className="search-button" // Added a class for styling
                      >
                        Explore
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="nav-buttons-container"> {/* Added a class for styling */}
              <Button className="nav-button" href="/">Home</Button>
              <Button className="nav-button" href="/about">About</Button>
              <Button className="nav-button" href="/services">Services</Button>
              <Button className="nav-button" href="/courses">Courses</Button>
              <Button className="nav-button" href="/register">Sign in</Button>
              <Button className="nav-button-register" href="/register">Register for Free</Button>
            </div>
          </>
        )}
        {isMobile && (
          <>
            <IconButton color="inherit" className="mobile-search-icon"> {/* Added a class for styling */}
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit" className="mobile-menu-icon"> {/* Added a class for styling */}
              <MenuIcon />
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MergedNavBar;
