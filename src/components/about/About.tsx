import AboutMe from "./aboutMe/AboutMe";
import Experience from "./experience/Experience";
import Certifications from "./certifications/Certifications";

const About = () => (
  <div className="bg-canvas text-ink">
    <AboutMe />
    <Experience />
    <Certifications />
  </div>
);

export default About;
