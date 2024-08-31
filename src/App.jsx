import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./components/AnimatedPage";
import "./App.css";

const Home = () => (
  <div className="page-content">
    <h1>Winteks Tekstil'e Hoş Geldiniz</h1>
    <img
      src="https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&w=1000&q=80"
      alt="Tekstil Fabrikası"
      className="feature-image"
    />
    <p>
      Winteks, geleneksel zanaatkarlığı en son teknolojiyle birleştiren tekstil
      endüstrisinde öncü bir yenilikçidir. Kalite ve sürdürülebilirliğe olan
      bağlılığımız bizi küresel pazarda farklı kılıyor.
    </p>
    <p>
      Lüks kumaşlardan çevre dostu malzemelere kadar, moda, ev dekorasyonu ve
      teknik tekstiller dahil olmak üzere çeşitli endüstriler için geniş bir
      yelpazede tekstil çözümleri sunuyoruz..
    </p>
  </div>
);

const About = () => (
  <div className="page-content">
    <h1>Winteks Hakkında</h1>
    <img
      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
      alt="Tekstil Örnekleri"
      className="feature-image"
    />
    <p>
      1985 yılında kurulan Winteks, küçük bir aile işletmesinden küresel bir
      tekstil devi haline geldi. Yolculuğumuz, sürekli yenilikçilik ve tekstil
      geleneklerine derin saygı ile karakterize edilir.
    </p>
    <p>Gurur duyduğumuz özelliklerimiz:</p>
    <ul>
      <li>Sürdürülebilir üretim yöntemleri</li>
      <li>Öncü araştırma ve geliştirme</li>
      <li>Önde gelen tasarımcılar ve markalarla işbirlikleri</li>
      <li>Çeşitli ve yetenekli işgücü</li>
    </ul>
  </div>
);

const Works = () => (
  <div className="page-content">
    <h1>Çalışmalarımız</h1>
    <div className="gallery">
      <img
        src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=500&q=80"
        alt="Kumaş Ruloları"
      />
      <img
        src="https://images.unsplash.com/photo-1596468138838-6605b631c5fa?auto=format&fit=crop&w=500&q=80"
        alt="Tekstil Makineleri"
      />
      <img
        src="https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?auto=format&fit=crop&w=500&q=80"
        alt="Bitmiş Ürünler"
      />
    </div>
    <p>Portföyümüz geniş bir tekstil uygulama yelpazesini kapsar:</p>
    <ul>
      <li>Yüksek performanslı spor giyim kumaşları</li>
      <li>Ev ve otomobiller için lüks döşemelik kumaşlar</li>
      <li>Sürdürülebilir moda için çevre dostu malzemeler</li>
      <li>Endüstriyel kullanım için teknik tekstiller</li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="page-content">
    <h1>Bize Ulaşın</h1>
    <img
      src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=1000&q=80"
      alt="Tekstil Stüdyosu"
      className="feature-image"
    />
    <p>
      Yeni projeler, yaratıcı fikirler veya vizyonunuzun bir parçası olma
      fırsatlarını tartışmaya her zaman hevesliyiz.
    </p>
    <div className="contact-info">
      <p>
        E-posta: <a href="mailto:info@winteks.com">info@winteks.com</a>
      </p>
      <p>Telefon: +90 (123) 456-7890</p>
      <p>
        Adres:{" "}
        <a
          href="https://www.google.com/maps?q=123+Tekstil+Sokak,+Kumaş+Şehri,+12345,+Türkiye"
          target="_blank"
          rel="noopener noreferrer"
        >
          123 Tekstil Sokak, Kumaş Şehri, 12345, Türkiye
        </a>
      </p>
    </div>
    <p>
      En son koleksiyonlarımızı keşfetmek ve tekstil ihtiyaçlarınızı
      uzmanlarımızla görüşmek için showroom'umuzu ziyaret edin.
    </p>
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.123456!3d40.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA3JzI0LjQiTiA3M8KwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <Router>
      <div className="app">
        <header className="sticky-header">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src="/logo.png" alt="Winteks Logo" />
            </Link>
          </div>
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={menuOpen ? "open" : ""}>
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/works" onClick={closeMenu}>
                  Çalışmalarımız
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="content-wrapper">
          <main>
            <AnimatedRoutes />
          </main>
          <footer className="site-footer">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Hakkımızda</h3>
                <p>
                  Winteks, çeşitli endüstriler için yenilikçi çözümler sunan
                  lider bir şirkettir.
                </p>
              </div>
              <div className="footer-section">
                <h3>İletişim Bilgileri</h3>
                <p>E-posta: info@winteks.com</p>
                <p>Telefon: +90 (123) 456-7890</p>
                <p>Adres: 123 Ana Cadde, Şehir, Ülke</p>
              </div>
              {/* Removed "Hızlı Bağlantılar" section */}
            </div>
            <div className="footer-bottom">
              <p>&copy; 2023 Winteks. Tüm hakları saklıdır.</p>
            </div>
          </footer>
        </div>
        {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
      </div>
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          }
        />
        <Route
          path="/works"
          element={
            <AnimatedPage>
              <Works />
            </AnimatedPage>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
