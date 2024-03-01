import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
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
        <Route path='/' element={<Root />} />
        <Route path="/courses/web-designing" element={<Web />} />
        <Route path="/courses/python-for-beginners" element={<Python />} />
        <Route path="/courses/robotics" element={<Robotics />} />
        <Route path="/courses/graphic-designing" element={<Graphic />} />
      </Routes>
    </div>
  );
}

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.sectionId;
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <Box style={{paddingTop: '5%', backgroundImage: 'url(/images/girl.png)' }}>
      <Container maxWidth="xl">
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="courses"><CoursesSection /></div>
        <div id="heroes"><HeroesSection /></div>
        <div id="contact"><Footer /></div>
      </Container>
    </Box>
  );
}

export default App;
