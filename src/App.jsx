import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <div>
        <CssBaseline />
        <NavBar />
        <Box style={{ backgroundImage: 'url(/images/girl.png)' }}>
          <Container maxWidth="xl">
            {/* Static content or links can remain outside of Routes */}
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="services"><Services /></div>
            <div id="courses"><CoursesSection /></div>
            <div id="heroes"><HeroesSection /></div>
            <div id="contact"><Footer /></div>

            {/* Define your Routes here for dynamic content */}
            <Routes>
              <Route path="/Courses/1" element={<Web />} />
              <Route path="/Courses/2" element={<Python/>} />
              <Route path="/Courses/3" element={<Robotics />} />
              <Route path="/Courses/4" element={<Graphic />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
