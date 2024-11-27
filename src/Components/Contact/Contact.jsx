import React, { useState } from "react";
import "./Contact.css";
import Nature1 from '../../assets/image/full-banner3.webp';
import Nature2 from '../../assets/image/R_3.webp';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [currentError, setCurrentError] = useState(""); // State to track the current error message
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const validateForm = () => {
    if (!formData.name) return "Name is required";
    if (!formData.phone) return "Phone number is required";
    if (!formData.email) return "Email is required";
    if (!formData.message) return "Message is required";
    return null; // No errors
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear the current error if the user fixes it
    if (currentError.includes(e.target.name)) {
      const nextError = validateForm();
      setCurrentError(nextError || "");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();

    if (error) {
      setCurrentError(error); // Show only the first error
    } else {
      // If no errors, proceed with form submission
      localStorage.setItem("contactFormData", JSON.stringify(formData));
      setShowModal(true); // Show the modal on successful form submission

      // Reset the form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setCurrentError(""); // Clear any remaining error
    }
  };

  // Close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="contact-form-container">
      <img src={Nature1} alt="Left Side Image" className="side-image left-image" />
      <div className="contact-form-content">
        <h2>
          Contact <span>Us</span>
        </h2>
        <p>
          Connect with Virtue Builders: Expert construction, innovative designs, quality craftsmanship. Reach us for inquiries, collaborations, and project consultations.
        </p>
        <div className="contact-form-details">
          <div className="contact-detail">
            <h3>Contact detail</h3>
            <p>
              <strong>Connect with Virtue Builders</strong>
            </p>
            <p>
              <strong>PHONE:</strong> +12457836913, +12457836913
            </p>
            <p>
              <strong>EMAIL:</strong> buildervirtue@info.com
            </p>
            <p>
              <strong>ADDRESS:</strong> 6743 last street, Under bypepassroad,karnataka,Bengaluru
            </p>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {currentError === "Name is required" && (
                    <span className="error-message">{currentError}</span>
                  )}
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {currentError === "Phone number is required" && (
                    <span className="error-message">{currentError}</span>
                  )}
                </div>
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
                {currentError === "Email is required" && (
                  <span className="error-message">{currentError}</span>
                )}
              </div>
              <div className="input-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {currentError === "Message is required" && (
                  <span className="error-message">{currentError}</span>
                )}
              </div>
              <button type="submit" className="form-button">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Form Submitted</h2>
            <p>Your details have been successfully submitted. Our team will contact you shortly.</p>
            <button onClick={handleCloseModal} className="close-modal-btn">
              Close
            </button>
          </div>
        </div>
      )}
      <img src={Nature2} alt="Right Side Image" className="side-image right-image" />
    </div>
  );
};

export default ContactForm;
