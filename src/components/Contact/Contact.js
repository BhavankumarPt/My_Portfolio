import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaResearchgate } from 'react-icons/fa';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formState.name.trim()) errors.name = "Name is required";
    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formState.email)) {
      errors.email = "Invalid email address";
    }
    if (!formState.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitMessage('Thank you for your message! I will get back to you soon.');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        setTimeout(() => setSubmitMessage(''), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a question or want to work together?</p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Location</h3>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email</h3>
                <p><a href="mailto:bhavan20523@gmail.com">bhavan20523@gmail.com</a></p>
              </div>
            </div>

            <div className="info-item">
              <FaPhone className="icon" />
              <div>
                <h3>Phone</h3>
                <p>+91-7397509310</p>
              </div>
            </div>

            <div className="social-links-contact">
              <a href="https://in.linkedin.com/in/bhavankumar-padmanaban" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.researchgate.net/profile/Bhavankumar-Padmanaban" target="_blank" rel="noopener noreferrer" aria-label="ResearchGate">
                <FaResearchgate />
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitMessage && <div className="submit-message success">{submitMessage}</div>}

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formState.message}
                  onChange={handleChange}
                  className={formErrors.message ? 'error' : ''}
                ></textarea>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
