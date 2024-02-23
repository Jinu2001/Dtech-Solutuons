import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CoursesSection from './pages/CoursesSection';
import { CssBaseline, Container, Box } from '@mui/material';

function App() {
  return (
    <Box>
      <CssBaseline />
      <Container maxWidth="xl">
       <Home></Home>
        {/* Add other components like Header, CourseCategories, etc. */}
        <About></About>
        <Services></Services>
        <CoursesSection/>
      </Container>
    </Box>
  );
}

export default App;
