// src/components/FeedbackModal.js
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './FeedbackModal.css';

function FeedbackModal({ isOpen, onClose }) {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace with your actual EmailJS Service ID, Template ID, and Public Key
    // It's best practice to store these in environment variables
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => {
              onClose();
              setStatus('idle');
          }, 3000); // Close modal after 3 seconds
        },
        (error) => {
          setStatus('error');
          console.error('FAILED...', error.text);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>×</button>
        <h2 className="modal-title">Feedback & Suggestions</h2>
        {status === 'success' ? (
            <div className="modal-message success">
                <h3>Thank You!</h3>
                <p>Your feedback has been sent successfully.</p>
            </div>
        ) : (
        <form ref={form} onSubmit={sendEmail} className="feedback-form">
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input type="text" id="user_name" name="user_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          {status === 'error' && <p className="modal-message error">Something went wrong. Please try again.</p>}

          <button type="submit" className="submit-button" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Feedback'}
          </button>
        </form>
        )}
      </div>
    </div>
  );
}

export default FeedbackModal;