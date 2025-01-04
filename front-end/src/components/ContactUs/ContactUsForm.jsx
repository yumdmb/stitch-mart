import React, { useState, useRef } from 'react';
import './ContactUsForm.css';
import emailjs from '@emailjs/browser';

function ContactUsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef(); // Create a ref for the form element

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm('service_stitchmart', 'template_stitchmart', form.current, {
        publicKey: 'zmCaxF7apTsGzg2YO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your message has been sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('There was an error sending your message. Please try again.');
        },
      );
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Contact Us</h2>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUsForm;