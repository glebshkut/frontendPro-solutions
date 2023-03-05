import { AiFillStar } from "react-icons/ai";
import Profile from "./Profile";

export default function TestimonialComponent({ testimonial, index }) {
  const { rating, name, jobTitle, companyName, avatar, title, text } =
    testimonial;
  return (
    <div className="testimonial-component">
      <div className="rating">
        {Array.from({ length: rating }).map(() => (
          <div className="rating-item">
            <AiFillStar color="white" size="0.7em" />
          </div>
        ))}
      </div>
      <h3 className="testimonial-title">{title.toUpperCase()}</h3>
      <p className="testimonial-text">
        {text.length > 40 ? `${text.slice(0, 40)}...` : text}
      </p>
      <Profile profile={{ name, jobTitle, companyName, avatar }} />
    </div>
  );
}
