// CourseDetail.jsx

import React from 'react';

const CourseDetail = ({ match }) => {
  const courseId = match.params.id; // Access the course ID from the URL parameters

  // Fetch course details based on the ID or use the course data from some other source

  return (
    <div>
      <h2>Course Details</h2>
      <p>Course ID: {courseId}</p>
      {/* Add more details here */}
    </div>
  );
};

export default CourseDetail;