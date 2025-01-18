import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import image1 from './images/image5.jpg';
import image2 from './images/image4.jpg';
import image3 from './images/image3.jpg';

function Home() {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div>
      {/* Navbar */}
      

      {/* Image Carousel with centered text */}
      <div className="image-container">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="full-screen-image"
        />
        <div className="overlay-text">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }} 
            className="animated-text header-text"
          >
            Empowering Farmers, Simplifying Crop Trade with Agrilink
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }} 
            className="animated-text"
          >
            Buy and sell crops with ease. Connect with trusted farmers and buyers, all in one place.
          </motion.p>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature">Wide Range of Crops</div>
          <div className="feature">Secure Transactions</div>
          <div className="feature">Fast Delivery</div>
          <div className="feature">Transparent Pricing</div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="how-it-works-grid">
          <div>
            <h3>For Buyers:</h3>
            <ul>
              <li>Browse Crops</li>
              <li>Place an Order</li>
              <li>Receive Delivery</li>
            </ul>
          </div>
          <div>
            <h3>For Sellers:</h3>
            <ul>
              <li>List Your Crops</li>
              <li>Connect with Buyers</li>
              <li>Earn Securely</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <blockquote>
            "Selling my crops has never been easier! This platform has helped me reach more buyers than ever before."<br />
            - Rajesh K., Farmer
          </blockquote>
          <blockquote>
            "I love the variety and quality of the crops I can find here. A game-changer for my business."<br />
            - Anita D., Buyer
          </blockquote>
        </div>
      </section>

      {/* Trending Crops Section */}
      <section className="trending-crops-section">
        <h2>Trending Crops</h2>
        <div className="crops-grid">
          <div className="crop">Fresh Organic Tomatoes</div>
          <div className="crop">Golden Wheat</div>
          <div className="crop">Basmati Rice</div>
          <div className="crop">Potatoes</div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2 className="cta-heading">Join the Revolution in Crop Trading Today!</h2>
        <p className="cta-text">Sign up now and start buying or selling crops in just a few clicks.</p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
        </div>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
        <div className="contact-info">
          <p>Email: support@Agrilink.com</p>
          <p>Phone: +91 9510748891</p>
        </div>
        <p>&copy; 2025 Agrilink. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
