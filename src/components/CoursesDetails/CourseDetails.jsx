import React from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Grid,
  ListItemIcon
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import the CheckCircleIcon
import { useNavigate } from 'react-router-dom';

const CourseDetail = ({ course }) => {
  const navigate = useNavigate();

  // Function to navigate back to courses list
  const handleBackClick = () => {
    navigate(-1); // This will take you back to the previous page
  };

  return (
    <Container maxWidth="md" style={{ backgroundImage: `url(${course.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Button onClick={handleBackClick} sx={{ mt: 2 }}>Back to Courses</Button>
      <Card sx={{ my: 4 }}>
        <CardMedia
          component="img"
          height="200"
          image={course.image}
          alt={course.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" style={{color:'#1A87C9', textAlign:'center'}}>
            {course.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {course.description}
          </Typography>
          <Typography variant="h6" component="div" sx={{ mt: 2 }}>
            Course Content:
          </Typography>
          <List>
            {course.content.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon style={{ color: '#1A87C9' , width:'18px', height:'18px'}} /> {/* Blue tick icon */}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <Grid container spacing={2} alignItems="center" sx={{ mt: 1 }}>
            <Grid item>
              <Avatar
                alt={course.tutor.name}
                src={course.tutor.photo}
                sx={{ width: 56, height: 56 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Tutor: {course.tutor.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.tutor.bio}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CourseDetail;
