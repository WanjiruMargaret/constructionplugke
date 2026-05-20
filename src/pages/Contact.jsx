import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    alert("Thank you! We will be in touch shortly.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-overlay">
          <div className="about-content">
            <h1>Contact Us</h1>

            <p>
              Reach out to Construction Plug KE for quality materials,
              trusted suppliers, and reliable construction services.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Get in Touch</h2>

            <p>
              We'd love to hear from you. Reach out via WhatsApp,
              phone, or fill out the form below for a quick quote.
            </p>
          </div>

          <div className="contact-grid">

            {/* CONTACT INFO */}
            <div className="contact-card">
              <h3>Contact Information</h3>

              <div className="contact-item">
                <div>
                  <p className="label">WhatsApp US</p>

                  <a
                    href="https://wa.me/254798305809"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link whatsapp"
                  >
                    +254 798 305 809
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div>
                  <p className="label">Call Us</p>

                  <a
                    href="tel:+254798305809"
                    className="link"
                  >
                    +254 798 305 809
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div>
                  <p className="label">Location</p>

                  <p className="address">
                    Nairobi, Kenya
                    <br />
                    Nakuru, Kenya
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="contact-card">
              <h3>Request a Quick Quote</h3>

              <form onSubmit={handleSubmit} className="contact-form">

                <div className="form-group">
                  <label>Name</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Project Details</label>

                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about what you need..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Get Quote
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;