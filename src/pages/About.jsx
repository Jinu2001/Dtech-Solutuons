import React from 'react';
import { Grid } from '@mui/material';

// Define your CSS as JavaScript objects
const styles = {
  aboutUs: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header1: {
    marginLeft: '0px',
    fontWeight: '600',
    fontSize: '50px',
    color: '#1B86C8',
    animation: 'fadeInUp 1s ease',
  },
  description1: {
    margin: '30px 0px',
    padding: '140px 20px',
    backgroundSize: '1440px 500px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    animation: 'fadeInUp 1s ease 0.5s',
    animationFillMode: 'backwards',
    backgroundImage: 'url("public/images/aboutBack.png")', // Replace with your image URL
  },
  p1: {
    marginLeft: '0px',
    fontWeight: '500',
    fontSize: 'larger',
  },
  fadeInUp: {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  emptyBox: {
    padding: '50px 260px',
  },
};

const About = () => {
  // Inject global styles for animations and media queries
  // This uses React's dangerouslySetInnerHTML feature to inject CSS directly into the HTML
  // Be cautious with dynamically generated string content to avoid XSS vulnerabilities
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .description {
            margin: 15px;
          }

          p {
            margin-left: 15px;
            margin-top: 15px;
          }
        }
      `}} />
      <section style={styles.description1}>
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={styles.emptyBox}></div>
            <div style={styles.aboutUs}>
              <header style={styles.header1}>
                <div>Who We Are</div>
              </header>
              <p style={styles.p1}>
                Welcome to DTEC, your premier destination for online courses facilitated by esteemed tutors. Established in 2024, our mission at DTEC is to provide high-quality education to students, fostering well-rounded individuals poised to become knowledgeable citizens and valuable employees.
              </p>
            </div>
          </div>
        </Grid>
      </section>
    </>
  );
};

export default About;
