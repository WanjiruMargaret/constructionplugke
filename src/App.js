import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Materials from "./pages/Materials";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="logo">
          <h2>Construction Plug KE</h2>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/materials">Materials</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <button className="whatsapp-btn">
          {" "}
          <a
            href="https://wa.me/+254798305809"
            target="_blank"
            rel="noopener noreferrer"
            className="link whatsapp"
          >
            {" "}
            WhatsApp Us
          </a>
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
