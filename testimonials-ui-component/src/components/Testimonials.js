import TestimonialComponent from "./TestimonialComponent";
import "./Testimonials.scss";
import { testimonials } from "./testimonialsArray";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <header className="testimonial-header">
        <h2>What Our Customers Are Saying</h2>
        <div>Arrows</div>
      </header>
      <div>
        {testimonials.map((testimonial, index) => (
          <TestimonialComponent testimonial={testimonial} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
