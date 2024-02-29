import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CoursesSection from './pages/CoursesSection';
import HeroesSection from './pages/HeroesSection';
import Footer from './pages/Footer';
import NavBar from './components/NavBar/NavBar';
import { CssBaseline, Container, Box } from '@mui/material';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <router>
      <div>
        <switch>
          <CssBaseline />
          <NavBar />
          <Home />
          <About />
          <Services />
          <CoursesSection />
          <HeroesSection />
          <Footer />
          {/* <Course1 /> */}
        </switch>
      </div>
    </router>
  );
}

export default App;
