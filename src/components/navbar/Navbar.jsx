import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navMainContainer}>
      <h2>MS Loans</h2>
      <ul className={styles.navList}>
        <li>
          <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>
            Apply
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>
            Contact
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'services')}>
            Services
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
