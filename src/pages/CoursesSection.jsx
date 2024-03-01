import React, { useState} from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Rating,Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DotNavigation from '../components/DotNavigation/DotNavigation';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'Web Designing',
    subtitle: 'Coding courses',
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
    subtitle: 'Coding courses',
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
    subtitle: 'Coding courses',
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
    subtitle: 'Coding courses',
    description: 'Use Figma to get a job in UI Design, User Interface, User Experience design.',
    duration: '01 hr 2 mins',
    rating: 4.0,
    totalRatings: 125,
    enrolled: 800,
    price: 'LKR 5200',
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
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' ,marginBottom:'10px', marginLeft:'220px'}}>
            <AccessTimeIcon style={{ marginRight: '4px', color:'#667085', width:'14px', height:'18px' }} />
            <Typography variant="body2" color="text.secondary" style={{fontSize:'14px'}}>
              {course.duration}
            </Typography>
          </div>
        <CardMedia
          image={course.imageUrl}
          alt={course.title}
          style={{ objectFit: 'cover' , height: '250px', }}
        />
        <CardContent>
        <Typography gutterBottom variant="subtltle2" component="div" style={{color:'#1B86C8', fontSize:'12px'}}>
            {course.subtitle}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'500'}}>
            {course.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color:'#667085', fontSize:'15px'}}>
            {course.description}
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
            <Rating name="read-only" value={course.rating} readOnly />
            <Typography variant="body2" color="text.secondary" style={{ marginLeft: '8px' }}>
              ({course.totalRatings.toLocaleString()})
            </Typography>
          </div>
          <Typography variant="body2" style={{ marginTop: '16px' }}>
            <strong>{course.enrolled.toLocaleString()}</strong> Enrolled
          </Typography>
          <div style={{ display: 'flex'}}>
          <Typography variant="h6" color="primary" style={{ marginTop: '8px' }}>
            {course.price}
          </Typography>
          <Button variant="contained" style={{ marginTop: '16px', marginLeft:'80px',backgroundColor:'#1A87C9'}} onClick={goToCourse}>
          Go to Course
          </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

const CoursesSection = () => {
  

  return (
    <div style={{ padding: '0px 30px', backgroundColor: 'white', marginBottom:'2%'}}>
      <Typography variant="h6" style={{ marginBottom: '0px', fontSize:'15px', textAlign:'center' }}>
        Explore Programs
      </Typography>
      <Typography variant="h4" component="h2" style={{ marginBottom: '16px',textAlign:'center' }}>
        Our Most Popular Courses
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '40px' ,fontSize:'12px', textAlign:'center'}}>
        Let's join our famous class, the knowledge provided will definitely be useful for you.
      </Typography>
      <Grid container spacing={2}style={{marginBottom:'50px'}} >
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </Grid>
      
    </div>
    );
};
       
export default CoursesSection;