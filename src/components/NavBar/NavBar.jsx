import React, { useState, useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Log the isMobile state to the console for debugging
  console.log('isMobile:', isMobile);

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
        <img src='./assets/logo.png' alt="Logo" style={{ width: '50px', height: '70px', marginRight: '10px', marginTop: '5px' }} />
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
          DTEC
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ display: 'block', color: 'black' }}>
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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button onClick={() => handleNavigation('home', '/')}>Home</Button>
            <Button onClick={() => handleNavigation('about', '/')}>About</Button>
            <Button onClick={() => handleNavigation('services', '/')}>Services</Button>
            <Button onClick={() => handleNavigation('courses', '/')}>Courses</Button>
            <Button style={{ backgroundColor: '#4883FF', color: 'white', marginLeft: '10px' }} onClick={() => handleNavigation('register', '/')}>Register</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
