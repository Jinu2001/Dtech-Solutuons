import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CoursesSection from './pages/CoursesSection';
import HeroesSection from './pages/HeroesSection';
import Footer from './pages/Footer';
import NavBar from './components/NavBar/NavBar';
import { CssBaseline, Container, Box } from '@mui/material';
import Web from './pages/Courses/Web';
import Python from './pages/Courses/python';
import Graphic from './pages/Courses/Graphic';
import Robotics from './pages/Courses/Robotics';



function App() {
  return (
  
      <div>
        <CssBaseline />
        <NavBar />
            
          <Routes>
            
            <Route path='/' Component={Root}/>
            <Route path="/courses/web-designing" Component={Web} />
            <Route path="/courses/python-for-beginners" Component={Python } />
            <Route path="/courses/robotics" Component={Robotics } />
            <Route path="/courses/graphic-designing" Component={Graphic} />
            
          </Routes>
         
      </div>
   
  );
}

export default App;

const Root = ()=>{

  return(
      <Box>
            {/* Static content or links can remain outside of Routes */}
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="services"><Services /></div>
            <div id="courses"><CoursesSection /></div>
            <div id="heroes"><HeroesSection /></div>
            <div id="contact"><Footer /></div>
      </Box>
  )
}
