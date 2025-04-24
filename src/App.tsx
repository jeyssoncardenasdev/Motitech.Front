import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import NavbarV1 from "./components/shared/organisms/NavBar/NavBarV1";
import Footer from "./components/shared/organisms/Footer/Footer";
import Hire from "./components/hire/Hire";
import Terms from "./components/terms/Terms";

function App() {
  return (
    <Router>
      <div className="font-poppins min-h-screen flex flex-col">
        <NavbarV1 />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
