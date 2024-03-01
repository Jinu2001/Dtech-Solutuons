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
        <img src='/images/logo.png' alt="Logo" style={{ width: '50px', height: '70px', marginRight: '10px', marginTop: '5px' }} />
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
          DTEC
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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button onClick={() => handleNavigation('home', '/')} style={{color: 'black'}}>Home</Button>
            <Button onClick={() => handleNavigation('about', '/')}style={{color: 'black'}}>About</Button>
            <Button onClick={() => handleNavigation('services', '/')}style={{color: 'black'}}>Services</Button>
            <Button onClick={() => handleNavigation('courses', '/')}style={{color: 'black'}}>Courses</Button>
            <Button style={{backgroundColor:'#1A87C9',color: 'white', marginLeft: '10px'}} onClick={() => handleNavigation('register', '/')}>Register</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
