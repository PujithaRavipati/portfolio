import React from 'react';
import Blobs from '../components/Blobs';
import ContactForm from '../components/ContactForm';
import { Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <main className="page-contact animate-fade-up">
      <Blobs color="rgba(107, 76, 219, 0.15)" /> {/* Indigo blob */}
      
      <div className="container section">
        <h1 className="section-title">
          Contact <span className="text-accent">Me!</span>
        </h1>
        
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="contact-methods">
              <a href="mailto:{{EMAIL_ADDRESS}}" className="contact-link">
                <Mail className="contact-icon" size={20} />
                <span>"ravipatipujitha@gmail.com"</span>
              </a>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
