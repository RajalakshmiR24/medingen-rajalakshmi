import React from 'react';
import './styles/Footer.css';
import logo from '../assets/white_logo.jpg';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Website',
      links: ['Home', 'Features', 'How it works', 'What our customers say?'],
    },
    {
      title: 'Follow Us',
      links: ['Instagram', 'Facebook', 'Twitter', 'Youtube'],
    },
    {
      title: 'More',
      links: ['Help Center', 'Become Member', 'Events', 'Terms & Conditions'],
    },
  ];

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img src={logo} alt="Medingen Logo" className="footer-logo" />
          <h2 className="footer-brand">Medingen</h2>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at urna et leo rhoncus
            mattis. Maecenas vel scelerisque nunc.
          </p>
        </div>

        {footerLinks.map((section, idx) => (
          <div className="footer-section" key={idx}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((item, index) => (
                <li key={index}>
                  {/* Replace span with <NavLink to=""> if using routes */}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
