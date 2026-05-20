import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <Link to="/">ConstructionPlug</Link>
        </div>

        <nav className={open ? "nav open" : "nav"}>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/materials">Materials</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <a
          className="whatsapp-btn"
          href="https://wa.me/2547XXXXXXXX"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Us
        </a>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>

      </div>
    </header>
  );
}