export default function TestimonialComponent({ testimonial, index }) {
  const { rating, name, jobTitle, companyName, avatar, title, text } =
    testimonial;
  return (
    <div className="testimonial-component">
      rating: {rating}, name: {name}, jobTitle: {jobTitle}, companyName:{" "}
      {companyName}, avatar: {avatar}, title: {title}, text: {text},
    </div>
  );
}
