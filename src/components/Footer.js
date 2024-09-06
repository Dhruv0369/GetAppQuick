import React from 'react';
import logo from '../assets/Aquarium.png'

const Footer = () => {
  return (
    <>
      <section className="aboutus">
        <h2 className="aboutus-logobox">
          <img
            src={logo}
            alt=""
            className="aboutus-logobox-logo"
          />
        </h2>
        <div className="aboutus-pages">
          <a href="/about-us/" className="aboutus-pages-item">
            About Us
          </a>
          <a href="/privacy-policy/" className="aboutus-pages-item">
            Privacy Policy
          </a>
          <a href="/terms-of-service/" className="aboutus-pages-item">
            Terms of Service
          </a>
          <a href="/contact-us/" className="aboutus-pages-item">
            Contact Us
          </a>
          <a href="/disclaimer/" className="aboutus-pages-item">
            Disclaimer
          </a>
        </div>
        <div className="aboutus-other">
          Copyright © 2024 Get App Quick. All Rights Reserved.
        </div>
        <a href="#topanchor" className="aboutus-topanchor">
          <i class="icon-top icon-wh20 fa-solid fa-circle-arrow-up"></i>
          &nbsp; BACK TO TOP
        </a>
      </section>

      <footer className="footer">
      <a href="games.html" className="footer-item">
          <i class="icon-footer-games fa-solid fa-gamepad"></i>
          <br />
          Games
        </a>
        <a href="apps.html" className="footer-item">
          <i class="icon-footer-apps fa-solid fa-dice-d6"></i>
          <br />
          Apps
        </a>
      </footer>
    </>
  );
};

export default Footer;
