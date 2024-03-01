import React, { useState, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';

const navigationItems = [
  { name: 'Home', sectionId: 'home' },
  { name: 'About', sectionId: 'about' },
  { name: 'Services', sectionId: 'services' },
  { name: 'Courses', sectionId: 'courses' },
  { name: 'Register', sectionId: 'register', isRegister: true },
];

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjust breakpoint as needed
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = useCallback((open) => (event) => {
    // Close the drawer on specific keyboard events or set it based on the open argument
    setDrawerOpen(open);
  }, []);
  

  const handleNavigation = useCallback((sectionId, path = '/') => {
    if (path === '/' && location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate(path, { state: { sectionId } });
    }
    setDrawerOpen(false);
  }, [navigate, location.pathname]);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <img src='./assets/logo.png' alt="Logo" sx={{ width: '50px', height: '70px', ml: '45px', mr: '10px', mt: '5px' }} />
        <Typography sx={{ flexGrow: 1, color: '#000', fontSize: '25px' }}>
          DTEC
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List>
                {navigationItems.map((item) => (
                  <ListItem button key={item.name} onClick={() => handleNavigation(item.sectionId)}>
                    <ListItemText primary={item.name} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <div>
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => handleNavigation(item.sectionId)}
                sx={{
                  fontWeight: '500',
                  color: item.isRegister ? 'white' : 'black',
                  bgcolor: item.isRegister ? '#4883FF' : 'transparent',
                  padding: '5px 20px',
                  ml: item.isRegister ? '70px' : '0',
                }}
              >
                {item.name}
              </Button>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
