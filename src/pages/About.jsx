import React from 'react';
import './About.css';
import { Grid } from '@mui/material';

const About = () => {
  return (
    <section className="description1">
      <Grid item xs={12} sm={6} md={3}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div className='emptybox'></div>
          <div className="about-us">
            <header className="header1">
              <div>Who We Are</div>
            </header>
            <p className='p1'>
              Welcome to DTEC, your premier destination for online courses facilitated by esteemed tutors. Established in 2024, our mission at DTEC is to provide high-quality education to students, fostering well-rounded individuals poised to become knowledgeable citizens and valuable employees.
            </p>
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default About;
