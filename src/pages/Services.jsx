import Footer from "../components/Footer";

function Services() {
  return (
    <div className="services-page">

      <div className="services-page-header">

        <h1>Our Services</h1>

        <p>
          Professional procurement and sourcing services for construction projects.
        </p>

      </div>


      <div className="services-page-grid">

        <div className="service-box">
          <h2>Material Sourcing</h2>

          <p>
            We help clients source cement, ballast, sand, steel, timber,
            paint, plumbing and electrical materials.
          </p>
        </div>


        <div className="service-box">
          <h2>Procurement Management</h2>

          <p>
            Professional purchasing coordination for construction projects.
          </p>
        </div>


        <div className="service-box">
          <h2>Delivery Coordination</h2>

          <p>
            Timely transportation and site delivery organization.
          </p>
        </div>


        <div className="service-box">
          <h2>Supplier Connections</h2>

          <p>
            Access trusted and verified construction suppliers.
          </p>
        </div>


        <div className="service-box">
          <h2>Price Comparison</h2>

          <p>
            Comparing quotations to help clients save money.
          </p>
        </div>


        <div className="service-box">
          <h2>Bulk Orders</h2>

          <p>
            Coordinating large construction material orders efficiently.
          </p>
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Services;