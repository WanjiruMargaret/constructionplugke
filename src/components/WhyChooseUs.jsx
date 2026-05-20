import "./whychooseus.css";

export default function WhyChooseUs() {
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