import React, { useState } from 'react';
import './Contact.css'; // Your CSS file
import emailjs from 'emailjs-com';

// Initialize EmailJS with your Public Key (User ID)
emailjs.init('VqkhNoPuFGjwRSDOsnqgq');  // Replace with your actual Public Key (User ID)

const Contact = () => {
  // Declare state variables for form data and status message
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Send the form data via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the template parameters
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
    };

    // EmailJS setup
    const serviceID = 'service_0zjyaxe';  // Your actual Service ID from EmailJS
    const templateID = 'template_ddwwdr2';  // Your actual Template ID from EmailJS
    const userID = 'CC8ccmncBPvxDw1ey';  // Your public key (User ID) from EmailJS

    // Send email via EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (result) => {
          setFormStatus('Your message has been sent successfully!');
          // Set timeout to hide the error message after 5 seconds
          setTimeout(() => {
            setFormStatus(''); // Clear the status after 5 seconds
          }, 5000); // 5000ms = 5 seconds

          // Clear the form fields
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error("EmailJS Error: ", error.text);  // Log the full error message to the console
          setFormStatus('Oops! Something went wrong. Please try again later.');

          // Set timeout to hide the error message after 5 seconds
          setTimeout(() => {
            setFormStatus(''); // Clear the status after 5 seconds
          }, 5000); // 5000ms = 5 seconds

        }
      );
};


  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
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
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>

      {/* Display the form status */}
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default Contact;
