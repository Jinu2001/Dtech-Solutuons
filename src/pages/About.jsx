import React from 'react';
import './About.css';
import { Grid } from '@mui/material';

const About = () => {
  return (
    <section className="description1">
      <Grid container>
        {/* Empty grid item for desktop view */}
        <Grid item xs={12} sm={6} md={3} className="empty-box"></Grid>

        {/* About content grid item */}
          

        <Grid item xs={12} sm={6} md={9} className="about-content">

          
          <div className="about-us">
            <header className="header1">
              <div>Who We Are</div>
            </header>
            <p className='p1'>
              Welcome to DTEC, your premier destination for online courses facilitated by esteemed tutors. Established in 2024, our mission at DTEC is to provide high-quality education to students, fostering well-rounded individuals poised to become knowledgeable citizens and valuable employees.
            </p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
