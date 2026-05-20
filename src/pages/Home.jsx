import {useRef} from "react";
import Footer from "../components/Footer";

function Home() {
  const contactFormRef = useRef(null);
  const scrollToForm = () => {
    contactFormRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-overlay">

          <div className="hero-content">

            <h1>
              CONNECTING YOU TO
              <span> QUALITY MATERIALS</span>
            </h1>

            <p>
              We help contractors, builders and homeowners source
              affordable and trusted construction materials across Kenya.
            </p>

            <div className="hero-buttons">

              <button className="primary-btn"onClick={() => {
                const phoneNumber = "254798305809";
                const message = encodeURIComponent("Hello Construction Plug KE, I would liketo request a qoute for some construction materials.");
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
              }}>
                Request Quote
              </button>

              <button className="secondary-btn">
                <a href="https://wa.me/+254798305809" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i> WhatsApp Us
                </a>
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES SECTION */}
      <section className="features-section">

        <div className="feature-card">
          <h3>Quality Materials</h3>
          <p>
            Trusted and durable construction products from verified suppliers.
          </p>
        </div>

        <div className="feature-card">
          <h3>Affordable Pricing</h3>
          <p>
            Competitive prices that help you save money on every project.
          </p>
        </div>

        <div className="feature-card">
          <h3>Reliable Delivery</h3>
          <p>
            Fast delivery coordination directly to your construction site.
          </p>
        </div>

        <div className="feature-card">
          <h3>Trusted Suppliers</h3>
          <p>
            We connect you with reliable and professional suppliers.
          </p>
        </div>

      </section>


      {/* SERVICES PREVIEW */}
      <section className="services-preview">

        <div className="services-header">

          <h2>Our Services</h2>

          <p>
            Professional sourcing and procurement services for all construction needs.
          </p>

        </div>


        <div className="services-grid">

          <div className="service-card">
            <h3>Material Sourcing</h3>

            <p>
              Cement, ballast, sand, steel, timber, tiles and more.
            </p>
          </div>

          <div className="service-card">
            <h3>Delivery Coordination</h3>

            <p>
              Organizing reliable transportation to construction sites.
            </p>
          </div>

          <div className="service-card">
            <h3>Supplier Connections</h3>

            <p>
              Access trusted suppliers with competitive market pricing.
            </p>
          </div>

        </div>

      </section>
      {/* CTA SECTION */}
      <section className="cta-section" ref={contactFormRef}>
        <h2>
          Ready To Source Quality Construction Materials?
        </h2>
        <p>
          Contact us today for affordable pricing and reliable delivery.
        </p>
        <div className="hero-buttons" style={{justifyContent:"center"}}>
          {/*the immediate call*/}
          <button className="primary-btn" onClick={() => window.location.href = "tel:+254798305809"}>Call Us Now</button>

          {/*the redirect button*/}
          <button className="secondary-btn" onClick={() => window.location.href ="/contact"}>Send a Message</button>

        </div>

      </section>
      <Footer />

    </div>
  );
}

export default Home;