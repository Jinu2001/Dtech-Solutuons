import React, { useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

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
  }, [navigate, location.pathname, scrollToSection]);
  
  const styles = {
    appBar: {
      backgroundColor: 'white',
      boxShadow:'none'
    },
    logo: {
      width: '50px',
      height: '70px',
      marginLeft: '45px',
      marginRight: '10px',
      marginTop: '5px',
    },
    logoText: {
      color: '#000000',
      fontSize: '25px',
      flexGrow: 1,
    },
    navButtonRegister: {
      color: 'white',
      backgroundColor: '#4883FF',
      padding: '5px 10px',
      marginLeft: '70px',
    },
    navButton: {
      fontWeight: '500',
      color: 'black',
      padding: '0px 20px',
    },
    navButtonsContainer: {
      marginRight: '210px',
    },
  };

  return (
    <AppBar position="fixed" sx={styles.appBar }>
      <Toolbar>
        <img src='./assets/logo.png' alt="Logo" style={styles.logo} />
        <Typography sx={styles.logoText} component="div">
          DTEC
        </Typography>

        {!isMobile && (
          <div sx={styles.navButtonsContainer}>
            <Button sx={styles.navButton} onClick={() => handleNavigation('home', '/')}>Home</Button>
<Button sx={styles.navButton} onClick={() => handleNavigation('about', '/')}>About</Button>
<Button sx={styles.navButton} onClick={() => handleNavigation('services', '/')}>Services</Button>
<Button sx={styles.navButton} onClick={() => handleNavigation('courses', '/')}>Courses</Button>
<Button sx={styles.navButtonRegister} onClick={() => handleNavigation('register', '/')}>Register</Button>

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

export default NavBar;
