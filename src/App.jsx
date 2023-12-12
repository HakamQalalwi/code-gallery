import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setShowScrollBTN(true) : setShowScrollBTN(false);
    });
  }, []);

  const [showScrollBTN, setShowScrollBTN] = useState(false);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a
        style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }}
        href="#up"
      >
        <button className="icon-keyboard_arrow_up scrollToTop"></button>
      </a>
    </div>
  );
}

export default App;
