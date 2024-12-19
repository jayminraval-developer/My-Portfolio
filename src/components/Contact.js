import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

// Initialize EmailJS with your Public Key (User ID)
emailjs.init('VqkhNoPuFGjwRSDOsnqgq');

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
    };

    const serviceID = 'service_0zjyaxe';
    const templateID = 'template_ddwwdr2';
    const userID = 'CC8ccmncBPvxDw1ey';

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (result) => {
          setFormStatus('Your message has been sent successfully!');
          setTimeout(() => {
            setFormStatus('');
          }, 5000);

          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          setFormStatus('Oops! Something went wrong. Please try again later.');
          setTimeout(() => {
            setFormStatus('');
          }, 5000);
        }
      );
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        {/* Contact Information Section */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><i className="fas fa-map-marker-alt"></i> At - Post Basu, Near Ramji Temple, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Near Palanpur City, Gujarat, India</p>
          <p><i className="fas fa-envelope"></i> jayminraval57@gmail.com</p>
          <p><i className="fas fa-envelope"></i> jayminraval104@gmail.com</p>
          <p><i className="fas fa-phone"></i> +91 7046957063</p>
        </div>

        {/* Contact Form Section */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default Contact;
