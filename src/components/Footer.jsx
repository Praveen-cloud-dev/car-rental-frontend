import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ABOUT + SUBSCRIBE */}
        <div className="footer-col">
          <h3>About Us</h3>

          <p className="footer-about">
            Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit consectetur adipiscing
            elit.
          </p>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <span>›</span>
              <Link onClick={scrollTop} to="/about">
                About
              </Link>
            </li>
            <li>
              <span>›</span>
              <Link onClick={scrollTop} to="/cars">
                Cars
              </Link>
            </li>
            <li>
              <span>›</span>
              <Link onClick={scrollTop} to="/car-types">
                Car Types
              </Link>
            </li>
            <li>
              <span>›</span>
              <Link onClick={scrollTop} to="/service">
                Service
              </Link>
            </li>
            <li>
              <span>›</span>
              <Link onClick={scrollTop} to="/contact">
                Contact us
              </Link>
            </li>
            <li>
              <span>›</span>
              <Link to="/">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* BUSINESS HOURS */}
        <div className="footer-col">
          <h3>Business Hours</h3>

          <div className="hours">
            <p className="label">Mon - Friday:</p>
            <p className="time">09.00 am to 07.00 pm</p>

            <p className="label">Saturday:</p>
            <p className="time">10.00 am to 05.00 pm</p>

            <p className="label">Vacation:</p>
            <p className="time">All Sunday is our vacation</p>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-col">
          <h3>Contact Info</h3>

          <ul className="contact-list">
            <li>
              <i className="bi bi-geo-alt"></i> 126 Street, Mohali
            </li>
            <li>
              <i className="bi bi-envelope"></i> info@example.com
            </li>
            <li>
              <i className="bi bi-telephone"></i> +91 7209644236
            </li>
            <li>
              <i className="bi bi-printer"></i> +91 7209644236
            </li>
          </ul>

          <div className="footer-socials round">
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Car Rental — All Rights Reserved  Made with ❤️ by Shivam
      </div>
    </footer>
  );
};

export default Footer;
