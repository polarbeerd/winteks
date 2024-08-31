import { Link } from "react-router-dom";

const Header = ({ menuOpen, toggleMenu, closeMenu }) => (
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
);

export default Header;
