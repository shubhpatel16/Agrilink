import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-info">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>AgriLink</strong>, the future of agricultural trade. We are a revolutionary **online platform** 
          that connects farmers, traders, and consumers to **buy and sell crops, fruits, vegetables, and other farm produce** 
          seamlessly and efficiently.
        </p>
        <p>
          Our mission is to **empower farmers** by giving them **direct access to buyers** without middlemen, ensuring **fair prices 
          and increased profitability**. We believe in **bridging the gap** between rural farmers and urban markets, fostering 
          a **transparent, accessible, and profitable** agricultural ecosystem.
        </p>
        <p>
          At AgriLink, we combine **technology with agriculture** to create a smarter supply chain, reduce food waste, and 
          support sustainable farming practices. Whether you are a farmer looking to **sell fresh produce**, or a buyer 
          searching for **high-quality crops**, AgriLink is your trusted partner in agricultural trade.
        </p>
        <p>
          **Join us today** and be part of the revolution that is shaping the future of agriculture!
        </p>
      </div>

      <div className="footer">
        <div className="footer-links">
          <button onClick={() => alert('Privacy Policy')}>Privacy Policy</button>
          <button onClick={() => alert('Terms Of Use')}>Terms Of Use</button>
        </div>
        <p>Copyright 2025 © AgriLink.com | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default AboutUs;