import React from "react";
import "./Contact.css";
import { FaLinkedin, FaBehance } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-container">
      <p className="contact-text">I use primarily LinkedIn and Behance.</p>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/kousha-yaryan/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.behance.net/shaydayaryan" target="_blank" rel="noopener noreferrer">
          <FaBehance />
        </a>
      </div>
    </div>
  );
}

export default Contact;
