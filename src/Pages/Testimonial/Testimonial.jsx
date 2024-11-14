import React from "react";
import "./Testimonial.css";

const TestimonialParagraphs = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "This product is amazing! It exceeded all my expectations and I am very happy with it.This product is amazing! It exceeded all my expectations and I am very happy with it.",
    },
    {
      name: "Jane Smith",
      text: "Fantastic service and the quality is top-notch! Highly recommend this to everyone.This product is amazing! It exceeded all my expectations and I am very happy with it.",
    },
    {
      name: "Mark Johnson",
      text: "I had an excellent experience. The customer support was exceptional and very helpful. This product is amazing! It exceeded all my expectations and I am very happy with it.",
    },
    {
      name: "Alice Brown",
      text: "A wonderful experience from start to finish. I will definitely be coming back for more.This product is amazing! It exceeded all my expectations and I am very happy with it.",
    },
  ];

  return (
    <div >
   
    <h2 className="product-titleS">TESTIMONALS</h2>
    <div className="testimonial-paragraphs">
      <div className="testimonial-row">
        {testimonials.slice(0, 2).map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <p>"{testimonial.text}"</p>
            <h5>- {testimonial.name}</h5>
          </div>
        ))}
      </div>
      <div className="testimonial-row">
        {testimonials.slice(2, 4).map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <p>"{testimonial.text}"</p>
            <h5>- {testimonial.name}</h5>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TestimonialParagraphs;
