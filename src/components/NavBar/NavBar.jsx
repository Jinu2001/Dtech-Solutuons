import React, { useState, useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleNavigation = useCallback((sectionId, path = '/') => {
    if (path === '/' && location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate(path, { state: { sectionId } });
    }
    setDrawerOpen(false); // Close the drawer when an item is clicked
  }, [navigate, location.pathname, scrollToSection]);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
      <Toolbar>
        <img src='public/images/Logo.png' alt="Logo" style={{ width: '68px', height: '80px', marginLeft: '50px', marginTop: '5px' }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <span className='first-letter-red'>D</span><span className='plaintxt'>TEC</span>
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ display: 'block', color: '#1A87C9' }}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              <List>
                {['Home', 'About', 'Services', 'Courses', 'Register'].map((text) => (
                  <ListItem button key={text} onClick={() => handleNavigation(text.toLowerCase())}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '50px' }} >
            
            <div className='navButtons'><Button onClick={() => handleNavigation('home', '/')} style={{ color: 'black', marginRight: '50px' }}>Home</Button></div>
            <div className='navButtons'><Button onClick={() => handleNavigation('about', '/')} style={{ color: 'black', marginRight: '50px' }}>About</Button></div>
            <div className='navButtons'><Button onClick={() => handleNavigation('services', '/')} style={{ color: 'black', marginRight: '50px' }}>Services</Button></div>
            <div className='navButtons'><Button onClick={() => handleNavigation('courses', '/')} style={{ color: 'black', marginRight: '50px' }}>Courses</Button></div>
            <div className='navButtons-reg'><Button style={{ backgroundColor: '#1A87C9', color: 'white', marginLeft: '10px', marginRight: '0px' }} onClick={() => handleNavigation('register', '/')}>Register</Button></div>
          </div>

        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
