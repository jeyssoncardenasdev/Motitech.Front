import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import NavbarV1 from "./components/shared/organisms/NavBar/NavBarV1";
import Footer from "./components/shared/organisms/Footer/Footer";
import Hire from "./components/hire/Hire";
import Terms from "./components/terms/Terms";
import Works from "./components/works/Works";
import ContactPage from "./components/contact/ContactPage";
import Privacy from "./components/privacy/Privacy";
import NotFound from "./components/notFound/NotFound";
import ScrollToTop from "./components/shared/ScrollToTop";
import Seo from "./components/shared/Seo";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
    <Router>
      <ScrollToTop />
      <Seo />
      <div className="font-poppins min-h-screen flex flex-col bg-canvas text-ink">
        <NavbarV1 />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
