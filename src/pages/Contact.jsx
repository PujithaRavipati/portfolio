import React from 'react';
import ContactForm from '../components/ContactForm';
import { LinkedinIcon, GithubIcon } from '../components/SocialIcons';
import { EMAIL, LINKEDIN, GITHUB } from '../contact';
import './Contact.css';

const Contact = () => {
  return (
    <main className="page-contact container">
      <header className="page-head contact-head">
        <h1 className="page-title">Contact</h1>
        <p className="page-intro">
          Looking for a frontend developer, or have a question about my work? Write to me.
        </p>
      </header>

      {/* The line ends here: the email is the last station */}
      <div className="terminus">
        <a className="terminus-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <div className="terminus-line" aria-hidden="true" />
      </div>

      <div className="contact-grid">
        <ul className="contact-socials">
          <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><LinkedinIcon size={22} />LinkedIn</a></li>
          <li><a href={GITHUB} target="_blank" rel="noopener noreferrer"><GithubIcon size={22} />GitHub</a></li>
        </ul>

        <section className="contact-form-panel" aria-labelledby="c-form">
          <h2 id="c-form">Or leave a message</h2>
          <ContactForm />
        </section>
      </div>
    </main>
  );
};

export default Contact;
