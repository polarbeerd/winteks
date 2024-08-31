import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedRoutes from "./routes/Routes";
import WhatsAppButton from "./components/WhatsAppButton";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <Router>
      <div className="app">
        <Header
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
        <div className="content-wrapper">
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
        {menuOpen && <div className="menu-overlay" onClick={toggleMenu} />}
      </div>
    </Router>
  );
}

export default App;
