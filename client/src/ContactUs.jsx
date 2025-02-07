import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us.</p>
        <br />
        <p><strong>Developed By</strong></p>
        <p>Software Solutions LLC</p>
        <p>
          <strong>Website:</strong> <a href="https://www.Agrilink.com">www.Agrilink.com</a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:connect@Agrilink.com">connect@Agrilink.com</a>
        </p>
      </div>

      <div className="footer">
        <div className="footer-links">
          <button onClick={() => alert('Privacy Policy')}>Privacy Policy</button>
          <button onClick={() => alert('Terms Of Use')}>Terms Of Use</button>
        </div>
        <p>Copyright 2025 © Agrilink.com | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default ContactUs;