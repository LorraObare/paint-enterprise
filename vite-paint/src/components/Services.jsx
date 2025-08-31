import "../styles/Services.css";
import brush from "../assets/brush.svg"; // Corrected import statement
import Manufacture from "../assets/manufacture.svg"; // Corrected import statement
import sell from "../assets/sell icon.svg"; // Corrected import statement

function Services() {
  return (
    <section class="service">
      <div class="section__container service__container" id="service">
        <h2 class="section__header">Our Services</h2>
        <div class="service__grid">
          <div class="service__card">
            <img src={brush} alt="service" />
            <h4>Painting Services</h4>
            <p>
                Gemasu is a professional painting service dedicated to transforming homes and businesses with high-quality finishes. We specialize in interior and exterior painting, delivering expert craftsmanship, durable coatings, and a flawless finish. Our team ensures precision, efficiency, and customer satisfaction, making every space vibrant and beautiful.
            </p>
          </div>
          <div class="service__card">
            <img src={Manufacture} alt="service" />
            <h4>Paint Manufacture</h4>
            <p>
                We formulate and produce premium, durable, and eco-friendly paints for residential, commercial, and industrial use. Our products are designed for long-lasting protection, vibrant colors, and smooth finishes, available in a variety of shades and types to suit every need. We guarantee quality, performance, and value for money.
            </p>
          </div>
          <div class="service__card">
            <img src={sell} alt="service" />
            <h4>Sell Products</h4>
            <p>
                Gemasu offers a wide range of premium paints for sale, including interior, exterior, and industrial-grade options. Our paints come in various colors and finishes, providing lasting beauty and protection for any project. Visit our store to explore our selection and find the perfect paint for your needs.
                
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;