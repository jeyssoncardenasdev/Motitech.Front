import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NavbarV1 from "./components/shared/organisms/NavBar/NavBarV1";
import Footer from "./components/shared/organisms/Footer/Footer";
import ScrollToTop from "./components/shared/ScrollToTop";
import Seo from "./components/shared/Seo";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { ThemeProvider } from "./theme/ThemeProvider";

const About = lazy(() => import("./components/about/About"));
const Hire = lazy(() => import("./components/hire/Hire"));
const Terms = lazy(() => import("./components/terms/Terms"));
const Works = lazy(() => import("./components/works/Works"));
const ContactPage = lazy(() => import("./components/contact/ContactPage"));
const Privacy = lazy(() => import("./components/privacy/Privacy"));
const NotFound = lazy(() => import("./components/notFound/NotFound"));

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
          <Suspense fallback={null}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
    </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
