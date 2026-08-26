import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Non-functional placeholder logic
    setStatus('Message sent successfully. I will get back to you soon!');
    e.target.reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName" className="sr-only">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="sr-only">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone" className="sr-only">Contact No.</label>
          <input type="tel" id="phone" name="phone" placeholder="Contact No." />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="sr-only">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea id="message" name="message" placeholder="Message" required rows="6"></textarea>
      </div>

      <button type="submit" className="submit-btn">Send Message</button>
      
      {status && <p className="form-status animate-fade-up">{status}</p>}
    </form>
  );
};

export default ContactForm;
