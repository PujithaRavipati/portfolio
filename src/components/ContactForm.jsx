import React, { useState } from 'react';
import { EMAIL } from '../contact';
import { buildMailto } from '../mailto';
import './ContactForm.css';

// Set VITE_FORMSPREE_ID in .env to send through Formspree.
// Without it, the form opens the visitor's email app with the message filled in.
const FORM_ID = import.meta.env.VITE_FORMSPREE_ID;

const messages = {
  sending: 'Sending…',
  sent: 'Message sent. I will get back to you soon!',
  mailto: 'Your email app should open with the message filled in. Press send there.',
  error: `That didn't go through. Please try again, or email me at ${EMAIL}.`
};

const ContactForm = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    if (!FORM_ID) {
      window.location.href = buildMailto(EMAIL, data);
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      if (!res.ok) throw new Error(res.statusText);
      setStatus('sent');
      form.reset();
    } catch {
      // Keep the visitor's text in the fields so nothing is lost
      setStatus('error');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" autoComplete="given-name" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName" autoComplete="family-name" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone <span className="optional">(optional)</span></label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows="6"></textarea>
      </div>

      <button type="submit" className="submit-btn" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      <p className={`form-status ${status === 'error' ? 'is-error' : ''}`} role="status" aria-live="polite">
        {status !== 'idle' && status !== 'sending' ? messages[status] : ''}
      </p>
    </form>
  );
};

export default ContactForm;
