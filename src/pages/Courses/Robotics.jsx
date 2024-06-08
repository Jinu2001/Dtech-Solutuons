import React from 'react';
import CourseDetail from '../../components/CoursesDetails/CourseDetails';


const roboticsCourseData = {
  name: "Robotics",
  image: "/images/robotics.jpg", // replace with your image path
  description: "Dive into the world of robotics and automation with our expert-led course.",
  content: [
    "Introduction to Robotics",
    "Sensors and Actuators",
    "Robotics Control Systems",
    // ... more content
  ],
  tutor: {
    name: "John Doe",
    photo: "/path-to-john-doe-photo.jpg", // replace with your tutor's photo path
    bio: "Experienced roboticist with a decade of industry experience."
  }
};

const Robotics = () => {
  return <CourseDetail course={roboticsCourseData} />;
};

export default Robotics;
