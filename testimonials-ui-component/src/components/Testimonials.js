import TestimonialComponent from "./TestimonialComponent";
import useWindowDimensions from "./useWindowDimensions";
import "./Testimonials.scss";
import { useRef } from "react";
import { testimonials } from "./testimonialsArray";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Testimonials = () => {
  const scroll = useRef();
  const { width } = useWindowDimensions();

  const handleScroll = (scrollOffset) => {
    scroll.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="testimonials">
      <header className="testimonial-header">
        <h2>What Our Customers Are Saying</h2>
        <div className="arrows">
          <BsFillArrowLeftCircleFill
            size="3em"
            onClick={() => handleScroll((-width * 2) / 3)}
          />
          <BsFillArrowRightCircleFill
            size="3em"
            onClick={() => handleScroll((width * 2) / 3)}
          />
        </div>
      </header>
      <div className="testimonials-array" ref={scroll}>
        {testimonials.map((testimonial, index) => (
          <TestimonialComponent testimonial={testimonial} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
