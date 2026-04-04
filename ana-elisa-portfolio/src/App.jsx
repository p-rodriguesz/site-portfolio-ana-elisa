import "./styles/global.css";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Collection from "./components/Collection";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MoreAbout from "./components/MoreAbout";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);

  const isBlankPage = pathname === "/sobre" || pathname === "/sobre/";

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("intro-locked", !introComplete && !isBlankPage);

    return () => {
      document.body.classList.remove("intro-locked");
    };
  }, [introComplete, isBlankPage]);

  if (isBlankPage) {
    return <MoreAbout />;
  }

  return (
    <>
      {!introComplete && <Hero onExitComplete={() => setIntroComplete(true)} />}

      {introComplete && (
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Navbar />
        </motion.div>
      )}

      <motion.main
        initial={false}
        animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.85, delay: introComplete ? 0.08 : 0, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: introComplete ? "auto" : "none" }}
        aria-hidden={!introComplete}
      >
        {introComplete && <div id="hero" aria-hidden="true" />}
        <About />
        <Collection />
        <Experience />
        <Contact />
        <Footer />
        {introComplete && <ScrollToTop />}
      </motion.main>
    </>
  );
}

