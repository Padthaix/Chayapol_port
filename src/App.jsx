import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import BgMusic from "./components/BgMusic";
import MenuScreen from "./components/MenuScreen";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Hobbies";
import Contact from "./pages/Contact";
import "./styles/theme.css";

// path segment → { component, transition variant }
const PAGES = {
  about: { el: About, variant: "about" },
  education: { el: Education, variant: "default" },
  projects: { el: Projects, variant: "default" },
  skills: { el: Skills, variant: "socials" },
  social: { el: Contact, variant: "socials" },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><MenuScreen /></PageTransition>} />
        {Object.entries(PAGES).map(([path, { el: El, variant }]) => (
          <Route
            key={path}
            path={`/${path}`}
            element={<PageTransition variant={variant}><El /></PageTransition>}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <>
      <BgMusic />
      <AnimatedRoutes />
    </>
  );
}
