import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer-content'>
        <div className='footer-brand'>
          <h2>SSRC</h2>
          <p>
            Strategic Solutions for Research and Consulting. Delivering
            insight-driven strategies for forward-thinking organizations.
          </p>
        </div>

        <div className='footer-links'>
          <h4>Quick Links</h4>
          <a href='#'>Home</a>
          <a href='#'>Services</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </div>

        <div className='footer-contact'>
          <h4>Contact</h4>

          <div className='contact-item'>
            <Mail size={16} />
            <span>info@ssrc-consulting.com</span>
          </div>

          <div className='contact-item'>
            <Phone size={16} />
            <span>+1 (000) 123-4567</span>
          </div>

          <div className='contact-item'>
            <MapPin size={16} />
            <span>Global Advisory Network</span>
          </div>

          <div className='social'>
            <Linkedin size={18} />
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        © {new Date().getFullYear()} SSRC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
