import React from 'react';
import { Link } from 'react-router-dom';
import { footerStyles } from "./Footer.styles";
import MemoryIcon from '@mui/icons-material/Memory';

const Footer = () => {
    return (
      <footer className={footerStyles.footer}>
        <div className={footerStyles.container}>
          <div>
            <h2 className={footerStyles.logoContainer}>
              <MemoryIcon sx={{fontSize: 20}} />PCBuilder
            </h2>
            <p className={footerStyles.description}>
              Build your perfect PC with our easy-to-use configurator tool.
              Compare components, save builds, and make informed decisions.
            </p>
          </div>
  
          <div>
            <h3 className={footerStyles.sectionTitle}>Quick Links</h3>
            <ul className={footerStyles.linkList}>
                <li><Link to="/" className={footerStyles.linkItem}>Home</Link></li>
                <li><Link to="/components" className={footerStyles.linkItem}>Components</Link></li>
                <li><Link to="/builds" className={footerStyles.linkItem}>Builds</Link></li>
                <li><Link to="/configurator" className={footerStyles.linkItem}>Configurator</Link></li>
                <li><Link to="/compare" className={footerStyles.linkItem}>Compare</Link></li>
                <li><Link to="/profile" className={footerStyles.linkItem}>Profile</Link></li>
            </ul>
          </div>
  
          <div>
            <h3 className={footerStyles.sectionTitle}>Contact Us</h3>
            <p className={footerStyles.contactText}>
              Have questions about PC building or our service?
            </p>
            <a href="mailto:contact@pcbuilder.com" className={footerStyles.emailLink}>
              contact@pcbuilder.com
            </a>
          </div>
        </div>
  
        <div className={footerStyles.copyright}>
          © 2025 PCBuilder. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;