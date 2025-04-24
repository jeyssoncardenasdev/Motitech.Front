import React from 'react';
import Certifications from './certifications/Certifications';
import AboutMe from './aboutMe/AboutMe';
import Experience from './experience/Experience';

const About: React.FC = () => {
  return (<div>
    <AboutMe />
    <Experience />
    <Certifications />
  </div>

  );
};

export default About;
