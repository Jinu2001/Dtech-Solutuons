import React from 'react';
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
    <div>
      <CssBaseline />
      <NavBar />
      <Box>
        <Container maxWidth="xl">
          <div id="home"><Home /></div>
          <div id="about"><About /></div>
          <div id="services"><Services /></div>
          <div id="courses"><CoursesSection /></div>
          <div id="heroes"><HeroesSection /></div>
          <div id="contact"><Footer /></div>
        </Container>
      </Box>
    </div>
  );
}

export default App;
