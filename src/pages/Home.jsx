// Home.jsx
import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';
import CourseCategories from '../components/CourseCategories/CourseCategories';
import ButtonsComponent from '../components/ButtonsComponent/ButtonsComponent';
import { CssBaseline, Box } from '@mui/material';


const Home = () => {
  const backgroundStyle = {
    backgroundImage: 'url(./images/girl.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // This will make the div take the full height of the viewport
    width: '100%' // This will make the div take the full width of the viewport
  };
  

  return (
    <>
      <CssBaseline />
      
      <Box style={backgroundStyle}>
        {/* Add other components like Header, CourseCategories, etc. */}
        <Header></Header>
        <ButtonsComponent></ButtonsComponent>
      </Box>
    </>
  );
};

export default Home;
