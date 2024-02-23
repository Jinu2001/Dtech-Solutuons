import React from 'react';
import './About.css';

const About = () => {
    return (
        
            <section className="description" style={{display:'flex' , flexDirection:'row'}}>
                <img src='public/images/6733427.jpg' className="image2" alt="image2"/>
                <p>
                    <div className="about-us">
                        <header className="header">
                            <h1>About us</h1>
                        </header>
                     </div>
                    Welcome to DTEC, your premier destination for online courses facilitated by esteemed tutors. Established in 2024, our mission at DTEC is to provide high-quality education to students, fostering well-rounded individuals poised to become knowledgeable citizens and valuable employees.
                </p>
            </section>
        
    );
};

export default About;
