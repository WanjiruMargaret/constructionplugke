import Footer from "../components/Footer";

function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">

        <div className="about-overlay">

          <div className="about-content">

            <h1>About Construction Plug KE</h1>

            <p>
              Connecting builders, contractors and homeowners to
              trusted construction material suppliers across Kenya.
            </p>

          </div>

        </div>

      </section>


      {/* STORY SECTION */}
      <section className="about-story">

        <div className="about-text">

          <h2>Who We Are</h2>

          <p>
            Construction Plug KE is a professional construction sourcing
            and procurement company focused on helping clients access
            quality materials at affordable market prices.
          </p>

          <p>
            We simplify construction procurement by connecting clients
            to reliable suppliers, coordinating deliveries and ensuring
            transparency throughout the sourcing process.
          </p>

        </div>

      </section>


      {/* MISSION SECTION */}
      <section className="mission-section">

        <div className="mission-card">

          <h3>Our Mission</h3>

          <p>
            To make construction sourcing easier, affordable and reliable
            for every client.
          </p>

        </div>


        <div className="mission-card">

          <h3>Our Vision</h3>

          <p>
            To become Kenya’s most trusted construction procurement
            and sourcing platform.
          </p>

        </div>


        <div className="mission-card">

          <h3>Our Values</h3>

          <p>
            Transparency, reliability, professionalism and customer trust.
          </p>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default About;