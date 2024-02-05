// CourseCategories/CourseCategories.jsx
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const CourseCategories = () => {
  return (
    <Box py={5}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5">20+</Typography>
          <Typography>Online Courses</Typography>
        </Grid>
        {/* Repeat for other categories */}
      </Grid>
    </Box>
  );
};

export default CourseCategories;
