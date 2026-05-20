import Footer from "../components/Footer";

function Materials() {
  return (
    <div className="materials-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-overlay">
          <div className="about-content">
            <div/>
            <h1>Materials We Offer </h1>
            <p>Discover our wide range of high-quality construction materials.</p>
          </div>
        </div>
      </section>

      {/* HEADER */}
      <section className="materials-page-header">

        <h1>Construction Materials</h1>

        <p>
          Quality construction materials sourced from trusted suppliers.
        </p>

      </section>


      {/* MATERIALS GRID */}
      <section className="materials-page-grid">

        <div className="material-box">
          <h2>Cement</h2>

          <p>
            High-quality cement for residential and commercial projects.
          </p>
        </div>


        <div className="material-box">
          <h2>Steel</h2>

          <p>
            Durable reinforcement bars and steel products.
          </p>
        </div>


        <div className="material-box">
          <h2>Sand</h2>

          <p>
            Clean and reliable construction sand supply.
          </p>
        </div>


        <div className="material-box">
          <h2>Ballast</h2>

          <p>
            Affordable ballast delivered directly to site.
          </p>
        </div>


        <div className="material-box">
          <h2>Tiles</h2>

          <p>
            Modern interior and exterior tile solutions.
          </p>
        </div>


        <div className="material-box">
          <h2>Timber</h2>

          <p>
            Quality timber for roofing and finishing projects.
          </p>
        </div>


        <div className="material-box">
          <h2>Paint</h2>

          <p>
            Professional paint products for all project sizes.
          </p>
        </div>


        <div className="material-box">
          <h2>Electrical Items</h2>

          <p>
            Reliable electrical materials and accessories.
          </p>
        </div>

      </section>

      <Footer/>

    </div>
  );
}

export default Materials;