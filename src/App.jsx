import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CoursesSection from './pages/CoursesSection';
import HeroesSection from './pages/HeroesSection';
import Footer from './pages/Footer';
import NavBar from './components/NavBar/NavBar';
import { CssBaseline, Container, Box } from '@mui/material';

function App() {
  return (

    <BrowserRouter>
      <Box style={{ backgroundImage: 'url(/images/girl.png)' }}>
        <CssBaseline />
        <Container maxWidth="xl">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<CoursesSection />} />
            <Route path="/heroes" element={<HeroesSection />} />
            {/* Add other Routes here */}
          </Routes>
          <Footer />
        </Container>
      </Box>
    </BrowserRouter>

    
  

export default App;
