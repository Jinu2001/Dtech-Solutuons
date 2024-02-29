import React, { useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './NavBar.css'; // Import the CSS file

const MergedNavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <AppBar position="static" className="merged-app-bar">
      <Toolbar>
        <img src='public/images/Logo.png' alt="Logo"/>
        <Typography className="logo-text" component="div">
          <span style={{ color: '#F7AD1D', fontWeight: '800' }}>D</span>TEC
        </Typography>

        {!isMobile && (
          <div className="nav-buttons-container">
            <Button
              className="nav-button"
              onClick={() => scrollToSection('home')}
              sx={{ ':hover': 'nav-button-hover' }}
            >
              Home
            </Button>
            <Button
              className="nav-button"
              onClick={() => scrollToSection('about')}
              sx={{ ':hover': 'nav-button-hover' }}
            >
              About
            </Button>
            <Button
              className="nav-button"
              onClick={() => scrollToSection('services')}
              sx={{ ':hover': 'nav-button-hover' }}
            >
              Services
            </Button>
            <Button
              className="nav-button"
              onClick={() => scrollToSection('courses')}
              sx={{ ':hover': 'nav-button-hover' }}
            >
              Courses
            </Button>
            <Button
              className="nav-button-register"
              onClick={() => scrollToSection('register')}
              sx={{ ':hover': 'nav-button-register-hover' }}
            >
              Register
            </Button>
          </div>
        )}
        {isMobile && (
          <>
            <IconButton color="inherit">
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

export default MergedNavBar;
