import React from 'react';

const CourseDetails = () => {
    return (
        <section className="course-details" style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="course-info">
                <header className="header">
                    <h1>Course Title</h1>
                </header>
                <p>
                    Description of the course goes here. Provide details about the course content, objectives, and any other relevant information. You can also include information about the instructors, duration, and any prerequisites.
                </p>
                {/* You can customize the content based on your requirements */}
            </div>
        </section>
    );
};

export default CourseDetails;
