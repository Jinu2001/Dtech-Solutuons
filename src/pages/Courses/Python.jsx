import React from 'react';
import CourseDetail from '../../components/CoursesDetails/CourseDetails';


const pythonCourseData = {
  name: "Python for Beginners",
  image: "/images/python.png", // replace with your image path
  description: "Start your programming journey with our beginner-friendly Python course.",
  content: [
    "Python Syntax and Semantics",
    "Data Structures",
    "Object-Oriented Programming with Python",
    // ... more content
  ],
  tutor: {
    name: "Susan Smith",
    photo: "/path-to-susan-photo.jpg", // replace with your tutor's photo path
    bio: "Software developer and Python expert with 15 years of teaching experience."
  }
};

const Python = () => {
  return <CourseDetail course={pythonCourseData} />;
};

export default Python;

