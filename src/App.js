import "./App.css";

function App() {
  return (
    <div className="app">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>Construction Plug KE</h1>

          <p>
            Connecting You To Quality Materials, Best Prices & Trusted Suppliers
          </p>

          <div className="buttons">
            <button>Request Quote</button>
            <button className="secondary">WhatsApp Us</button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-cards">
          <div className="card">
            <h3>Material Sourcing</h3>
            <p>
              We help you find affordable and quality construction materials.
            </p>
          </div>

          <div className="card">
            <h3>Delivery Coordination</h3>
            <p>Reliable transport and timely delivery to your site.</p>
          </div>

          <div className="card">
            <h3>Supplier Connections</h3>
            <p>
              Trusted suppliers for cement, steel, ballast, timber and more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
