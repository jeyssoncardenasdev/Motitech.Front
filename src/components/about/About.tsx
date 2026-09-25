import AboutMe from "./aboutMe/AboutMe";
import Experience from "./experience/Experience";
import Certifications from "./certifications/Certifications";

const About = () => (
  <div className="bg-zinc-900 text-white">
    <AboutMe />
    <Experience />
    <Certifications />
  </div>
);

export default About;
