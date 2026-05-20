import React from "react";
function WhyChooseUs() {
  const items = [
    {
      title: "Trusted Suppliers",
      desc: "We connect you with verified construction material suppliers."
    },
    {
      title: "Affordable Prices",
      desc: "Get the best market prices without middlemen."
    },
    {
      title: "Fast Delivery",
      desc: "Quick sourcing and delivery for your projects."
    },
    {
      title: "Reliable Support",
      desc: "We guide you from planning to material acquisition."
    }
  ];

  return (
    <section className="why">
      <h2>Why Choose ConstructionPlug</h2>

      <div className="why-grid">
        {items.map((item, index) => (
          <div className="why-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// 2. Export the main Footer component which RENDERS the WhyChooseUs section first
export default function Footer() {
  return (
    <>
      {/* This injects the "Why Choose Us" section right above the dark blue footer links */}
      <WhyChooseUs />

      <footer className="footer">
        <div className="footer-container">

          <div>
            <h3>ConstructionPlug</h3>
            <p>Your trusted construction sourcing partner.</p>
          </div>

          <div>
            <h3>QUICK LINKS</h3> {/* Changed h1 to h3 to look symmetrical with the other column headers */}
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/materials">Materials</a>
            <a href="/contact">Contact</a>
            <a href="/about">About Us</a>
          </div>

          <div>
            <h3>Contact</h3> {/* Changed h2 to h3 for uniform header font sizing */}
            <p>+254 798 305 809</p>
            <p>info@constructionplug.co.ke</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ConstructionPlug. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}