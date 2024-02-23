import React, { useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <AppBar position="static" style={{ background: 'white', color: 'black', padding: 0, boxShadow: 'none' }}>
      <Toolbar style={{ justifyContent: 'space-between', width: '100%', margin: 0 }}>
        <img className="logo" src='./assets/logo.png' alt="Logo"/>
        <Typography style={{ fontWeight: 'bold', fontSize: '25px' }} component="div" className="logo-text" sx={{ flexGrow: 1 }}>
          DTEC
        </Typography>

        {!isMobile && (
          <div>
            <Button onClick={() => scrollToSection('home')} className="nav-button">Home</Button>
            <Button onClick={() => scrollToSection('about')} className="nav-button">About</Button>
            <Button onClick={() => scrollToSection('services')} className="nav-button">Services</Button>
            <Button onClick={() => scrollToSection('courses')} className="nav-button">Courses</Button>
            <Button onClick={() => scrollToSection('heroes')} className="nav-button">Tutors</Button>
            <Button onClick={() => scrollToSection('contact')} className="nav-button">Contact us</Button>
            <Button onClick={() => scrollToSection('heroes')} className="nav-button">Register</Button>
          </div>
        )}
        {isMobile && (
          <IconButton color="inherit" onClick={() => {/* Implement mobile menu logic here */}}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
