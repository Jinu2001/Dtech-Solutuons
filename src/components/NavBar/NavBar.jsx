import React from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const pages = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Courses', path: '/courses' },
    { title: 'Register', path: '/register' },
  ];

  return (
    <AppBar position="static" elevation={0} sx={{ background: 'white', color: theme.palette.primary.main }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" color="inherit" sx={{ cursor: 'pointer', userSelect: 'none', flexGrow: 1 }}>
          DTEC
        </Typography>
        {isMobile ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
            {pages.map((page) => (
              <Link
                key={page.title}
                to={page.path}
                style={{
                  textDecoration: 'none',
                  color: theme.palette.primary.main,
                  margin: '0 8px',
                }}
                sx={{
                  padding: '8px 16px',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.light,
                    color: 'white',
                  },
                }}
              >
                {page.title}
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
