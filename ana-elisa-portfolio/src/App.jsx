import "./styles/global.css";

import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Collection from "./components/Collection";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <Experience />
      <Contact />
      <Footer />
        <ScrollToTop />
    </>
  );
}
