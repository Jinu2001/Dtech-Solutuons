// Home.jsx
import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';
import CourseCategories from '../components/CourseCategories/CourseCategories';
import ButtonsComponent from '../components/ButtonsComponent/ButtonsComponent';
import { CssBaseline, Box } from '@mui/material';


const Home = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ 
        height: '100vh',
        width: '100%',
        backgroundImage: 'url(./images/girl.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '@media (max-width: 600px)': {
          backgroundSize: 'contain',
          backgroundPosition: 'bottom',
        }
      }}>
        {/* Add other components like Header, CourseCategories, etc. */}
        <Header />
        <ButtonsComponent />
      </Box>
    </>
  );
};

export default Home;

