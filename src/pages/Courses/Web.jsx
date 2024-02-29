import React from 'react';
import CourseDetail from '../../components/CoursesDetails/CourseDetails';
// Dummy data for the Web course
const webCourseData = {
  name: "Web Designing",
  image: "/images/web.jpg", // replace with the path to your image
  description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
  content: [
    "Responsive Design Principles",
    "Introduction to CSS",
    "Advanced HTML Techniques",
    // ... more bullet points
  ],
  tutor: {
    name: "Alex Johnson",
    photo: "/path-to-tutor-photo.jpg", // replace with the path to the tutor's photo
    bio: "Experienced UI/UX designer with 5+ years in the industry."
  }
};

const Web = () => {
  return <CourseDetail course={webCourseData} />;
};

export default Web;
