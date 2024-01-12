import React from 'react'
import "../assets/styles/Footer.css";
const Footer:React.FC = () => {
  return (
    <div className="footer">
      <div className="contact-details">
        <p>Contact Us:</p>
        <p>Email: info@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="address">
        <p>React Web App Devs</p>
        <p>123 Main Street</p>
        <p>City, State, 12345</p>
      </div>
      <p>&copy; 2024 React Website. All rights reserved.</p>
      <p>
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </p>
    </div>
  );
}

export default Footer