import React, { useState} from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Rating } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DotNavigation from '../components/DotNavigation/DotNavigation';


const courses = [
  {
    id: 1,
    subtitle: 'Designing Courses',
    title: 'Web Designing',
    description: 'Use Figma to get a job in UI Design, User Interface, User Experience design.',
    duration: '08 hr 12 mins',
    rating: 4.3,
    totalRatings: 16325,
    enrolled: 2001,
    price: 'LKR 4000',
    imageUrl: 'public/images/6733427.jpg',
  },
  {
    id: 2,
    subtitle: 'Coding courses',
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
    subtitle: 'Coding Courses',
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
    subtitle: 'Designing Courses',
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

const CourseCard = ({ course, onClick }) => { // Added onClick prop
  return (
    <Grid item xs={12} sm={6} md={3} onClick={() => onClick(course.id)}>
        <Card>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' ,marginBottom:'10px', marginLeft:'220px'}}>
              <AccessTimeIcon style={{ marginRight: '4px', color:'#667085', width:'14px', height:'18px' }} />
              <Typography variant="body2" color="text.secondary" style={{fontSize:'14px'}}>
                {course.duration}
              </Typography>
            </div>
          <CardMedia
            // component="img"
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
            <Typography variant="h6" color="primary" style={{ marginTop: '8px' }}>
              {course.price}
            </Typography>
          </CardContent>
        </Card>
    </Grid>
  );
};

const CoursesSection = () => {
  const [activeDot, setActiveDot] = useState(0);

  const handleCourseClick = (courseId) => {
    const dotIndex = (courseId - 1) % 4; // Adjusted logic to account for IDs starting from 1
    setActiveDot(dotIndex);
  };

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
      <Grid container spacing={2} style={{marginBottom:'50px'}} >
        {courses.map(course => (
          <CourseCard key={course.id} course={course} onClick={handleCourseClick} />
        ))}
      </Grid>
      <DotNavigation total={4} current={activeDot} onDotClick={setActiveDot} />
    </div>
    );
};

export default CoursesSection;



