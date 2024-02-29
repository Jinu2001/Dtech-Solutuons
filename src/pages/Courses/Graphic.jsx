// Graphic.jsx
import React from 'react';
import CourseDetail from '../../components/CoursesDetails/CourseDetails';

const graphicCourseData = {
  name: "Graphic Designing",
  image:  "/images/graphic.jpg", // replace with your image path
  description: "Learn to create stunning graphics with our comprehensive course.",
  content: [
    "Fundamentals of Graphic Design",
    "Typography and Layout",
    "Branding and Identity",
    // ... more content
  ],
  tutor: {
    name: "Emma Wilson",
    photo: "/path-to-emma-photo.jpg", // replace with your tutor's photo path
    bio: "Award-winning graphic designer with a passion for teaching."
  }
};

const Graphic = () => {
  return <CourseDetail course={graphicCourseData} />;
};

export default Graphic;
