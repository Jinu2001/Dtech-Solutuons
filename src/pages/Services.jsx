import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import DotNavigation from '../components/DotNavigation/DotNavigation';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import DevicesOtherIcon from '@mui/icons-material/DevicesOtherTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';

const Services = () => {
  const [currentDot, setCurrentDot] = useState(0);

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '40px', marginBottom: '5%' }}>
      <h2>Fostering a playful & engaging learning environment</h2><br />
      <Grid container spacing={2} justifyContent="center">
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard
              icon={index % 3 === 0 ? <DevicesOtherIcon /> : index % 3 === 1 ? <DisplaySettingsTwoToneIcon /> : <QueryStatsTwoToneIcon />}
              title={index % 3 === 0 ? "User Experience" : index % 3 === 1 ? "Web Development" : "Marketing"}
              description="Description based on index."
              onClick={() => handleCardClick(index % 3)}
            />
          </Grid>
        ))}
      </Grid><br /><br />
      <DotNavigation total={3} current={currentDot} onDotClick={setCurrentDot} />
    </div>
  );
};

export default Services;
