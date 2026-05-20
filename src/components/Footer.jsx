/*import "./footer.css";*/

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h3>ConstructionPlug</h3>
          <p>Your trusted construction sourcing partner.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/materials">Materials</a>
          <a href="/contact">Contact</a>
        </div>

        <div>
          <h4>Contact</h4>
          <p>+254 798305809</p>
          <p>constructionplug@email.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ConstructionPlug. All rights reserved.</p>
      </div>
    </footer>
  );
}