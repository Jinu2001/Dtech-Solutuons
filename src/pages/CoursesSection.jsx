import React, { useState} from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Rating,Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DotNavigation from '../components/DotNavigation/DotNavigation';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'Web Designing',
    description: 'Use Figma to get a job in UI Design, User Interface, User Experience design.',
    duration: '08 hr 12 mins',
    rating: 4.3,
    totalRatings: 16325,
    enrolled: 2001,
    price: 'LKR 4000',
    imageUrl: './images/web.jpg',
  },
  {
    id: 2,
    title: 'Python for Beginners',
    description: 'Design Web Sites and Mobile Apps that Your Users Love and Return to Again.',
    duration: '06 hr 3 mins',
    rating: 4.2,
    totalRatings: 832,
    enrolled: 2500,
    price: 'LKR 4000',
    imageUrl: './images/python.png',
  },
  {
    id: 3,
    title: 'Robotics',
    description: 'Use Figma to get a job in UI Design, User Interface, User Experience design.',
    duration: '01 hr 2 mins',
    rating: 4.0,
    totalRatings: 125,
    enrolled: 800,
    price: 'LKR 4000',
    imageUrl: './images/robotics.jpg',
  },
  {
    id: 4, // Fixed ID to be unique
    title: 'Graphic Designing',
    description: 'Use Figma to get a job in UI Design, User Interface, User Experience design.',
    duration: '01 hr 2 mins',
    rating: 4.0,
    totalRatings: 125,
    enrolled: 800,
    price: 'Price',
    imageUrl: './images/graphic.jpg',
  },
];

const CourseCard = ({ course }) => {
  const navigate = useNavigate(); 
  

  const goToCourse = () => {
    const pathMap = {
      1: '/courses/web-designing',
      2: '/courses/python-for-beginners',
      3: '/courses/robotics',
      4: '/courses/graphic-designing',
    };
    navigate(pathMap[course.id]);
  };
  
  return (
    <Grid item xs={12} sm={6} md={3} >
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={course.imageUrl}
          alt={course.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course.description}
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
            <AccessTimeIcon style={{ marginRight: '4px' }} />
            <Typography variant="body2" color="text.secondary">
              {course.duration}
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
            <Rating name="read-only" value={course.rating} readOnly />
            <Typography variant="body2" color="text.secondary" style={{ marginLeft: '8px' }}>
              ({course.totalRatings.toLocaleString()})
            </Typography>
          </div>
          <Typography variant="body2" style={{ marginTop: '16px' }}>
            <strong>{course.enrolled.toLocaleString()}</strong> Enrolled
          </Typography>
          <Typography variant="h6" color="primary" style={{ marginTop: '8px' }}>
            {course.price}
          </Typography>
          <Button variant="contained" color="primary" style={{ marginTop: '16px' }} onClick={goToCourse}>
          Go to Course
        </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

const CoursesSection = () => {
  

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f4f8', marginBottom:'2%'}}>
      <Typography variant="h6" style={{ marginBottom: '16px' }}>
        Explore Programs
      </Typography>
      <Typography variant="h4" component="h2" style={{ marginBottom: '16px' }}>
        Our Most Popular Courses
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '20px' }}>
        Let's join our famous class, the knowledge provided will definitely be useful for you.
      </Typography>
      <Grid container spacing={2} sx={{m:2}} >
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </Grid>
      
    </div>
    );
};
       
export default CoursesSection;