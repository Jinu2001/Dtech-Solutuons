import React, { useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const MergedNavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Inline styles
  const styles = {
    appBar: {
      backgroundColor: 'white !important',
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
      fontSize: '25px !important',
      flexGrow: 1,
    },
    navButtonRegister: {
      color: 'white !important',
      backgroundColor: '#4883FF !important',
      padding: '5px 10px !important',
      marginLeft: '70px !important',
    },
    navButton: {
      fontWeight: '500 !important',
      color: 'black !important',
      padding: '0px 20px !important',
    },
    navButtonsContainer: {
      marginRight: '210px !important',
    },
  };

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar>
        <img src='./assets/logo.png' alt="Logo" sx={styles.logo} />
        <Typography sx={styles.logoText} component="div">
          <span style={{ color: '#F7AD1D', fontWeight: '800' }}>D</span>TEC
        </Typography>

        {!isMobile && (
          <div style={styles.navButtonsContainer}>
            <Button sx={styles.navButton} onClick={() => scrollToSection('home')}>Home</Button>
            <Button sx={styles.navButton} onClick={() => scrollToSection('about')}>About</Button>
            <Button sx={styles.navButton} onClick={() => scrollToSection('services')}>Services</Button>
            <Button sx={styles.navButton} onClick={() => scrollToSection('courses')}>Courses</Button>
            <Button sx={styles.navButtonRegister} onClick={() => scrollToSection('register')}>Register </Button>
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
