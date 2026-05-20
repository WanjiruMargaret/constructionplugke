import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <h2>Construction Plug KE</h2>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services </li>
          <li>Materials</li>
          <li>Contact</li>
        </ul>
        <button className="whatsapp-btn">WhatsApp Us</button>
      </nav>
      {/*Hero Section*/}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Connecting You to <span>QUALITY MATERIALS.</span> <br /> Best
              prices.Trusted Suppliers.
            </h1>
            <p>
              We help builders,contractors and homeonwers source quality
              construction materials at affordable market prices.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Request Quote</button>
              <button className="secondary-btn">WhatsApp Us</button>
            </div>
          </div>
        </div>
      </section>
      {/*Features Section*/}
      <section className="features-section">
        <div className="feature-card">
          <h3>Quality Materials</h3>
          <p>
            Durable and trusted construction materials sourced from verified
            suppliers.
          </p>
        </div>
        <div className="feature-card">
          <h3>Best Prices</h3>
          <p>Competitive market pricing that helps clients save more money.</p>
        </div>
        <div className="feature-card">
          <h3>Reliable Delivery</h3>
          <p>
            Fast and efficient material delivery directly to your construction
            site.
          </p>
        </div>
        <div className="feature-card">
          <h3>Trusted Service</h3>
          <p>
            Professional sourcing with honesty, transparency and reliability.
          </p>
        </div>
      </section>
      {/*Services Section*/}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Material Sourcing</h3>
            <p>
              We connect you with affordable and quality building materials.
            </p>
          </div>
          <div className="service-card">
            <h3>Delivery cordinations</h3>
            <p>
              Reliable transport and delivery arrangements for all materials
            </p>
          </div>
          <div className="service-card">
            <h3>Supplier Connections</h3>
            <p>Access to trusted suppliers across Kenya.</p>
          </div>
        </div>
      </section>
      {/*Footer section*/}
      <footer className="footer">
        <h3>Construction Plug KE</h3>
        <p>WE Conect • We Source • You Build</p>
      </footer>
    </div>
  );
}
export default App;
