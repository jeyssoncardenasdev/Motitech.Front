import Hero from "./sections/Hero";
import Technologies from "./sections/Technologies";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Socials from "./sections/Socials";

const Home = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Hero />
      <Technologies />
      <Services />
      <Projects />
      <Contact />
      <Socials />
    </div>
  );
};

export default Home;
