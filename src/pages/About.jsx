import React from 'react';
import { Grid } from '@mui/material';

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
    padding: '50px 20px', // Adjust padding for smaller screens
  },
};

const About = () => {
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
          .description1 {
            padding: 50px 20px; // Adjust padding for smaller screens
          }

          .p1 {
            margin-left: 20px; // Adjust margin for smaller screens
            margin-top: 20px; // Adjust margin for smaller screens
          }
        }
      `}} />
      <section style={styles.description1} className="description1"> {/* Add className for targeting in media query */}
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={styles.emptyBox}></div>
            <div style={styles.aboutUs}>
              <header style={styles.header1}>
                <div>Who We Are</div>
              </header>
              <p style={styles.p1} className="p1"> {/* Add className for targeting in media query */}
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
