import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>LoanEase</h3>
          <p>Your trusted loan partner. Simple. Fast. Reliable.</p>
        </div>

        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className={styles.linkButton}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className={styles.linkButton}
              >
                Loans Apply
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className={styles.linkButton}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className={styles.linkButton}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Contact Us</h4>
          <p>
            Email: <a
              href="mailto: munnasheak@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.emailLink}
            >
              msloans@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+91 8106318055" className={styles.phoneLink}>
              +91 8106318055
            </a>
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} LoanEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
