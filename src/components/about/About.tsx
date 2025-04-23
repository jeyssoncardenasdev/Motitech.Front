import React from 'react';
import Certifications from './certifications/Certifications';
import AboutMe from './aboutMe/AboutMe';

const About: React.FC = () => {
  return (<div> 
    <AboutMe/>
    <Certifications/>
    </div>
    
  );
};

export default About;
