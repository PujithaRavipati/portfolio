import React from 'react';
import ContactForm from '../components/ContactForm';
import { LinkedinIcon, GithubIcon } from '../components/SocialIcons';
import { EMAIL, LINKEDIN, GITHUB } from '../contact';
import './Contact.css';

const Contact = () => {
  return (
    <main className="page-contact container">
      <header className="desk-head">
        <h1 className="vinyl">Contact</h1>
        <p className="wall-text">
          Looking for a frontend developer, or have a question about my work? Write to me.
        </p>
      </header>

      <div className="desk">
        <section className="desk-direct" aria-label="Write to me directly">
          <a className="desk-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <ul className="desk-socials">
            <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><LinkedinIcon size={22} />LinkedIn</a></li>
            <li><a href={GITHUB} target="_blank" rel="noopener noreferrer"><GithubIcon size={22} />GitHub</a></li>
          </ul>
        </section>

        <section className="label desk-form" aria-labelledby="c-form">
          <h2 id="c-form">Or leave a message</h2>
          <ContactForm />
        </section>
      </div>
    </main>
  );
};

export default Contact;
