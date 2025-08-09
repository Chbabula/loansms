import React from "react";
import styles from "./services.module.css";
import servicesImg from "../../assets/images/services.jpg";

const Services = () => {
  const handleLearnMoreClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="services" className={styles.servicesContainer}>
      <div className={styles.serImgContainer}>
        <img
          src={servicesImg}
          alt="Our Services"
          className={styles.serImg}
        />
      </div>

      <div className={styles.serTextContainer}>
        <h4>OUR SERVICES</h4>
        <p>
          At Get My Loan, we provide a range of loan services to assist you in
          fulfilling your financial needs. Whether it is for a new car, home
          renovation or education, we have you covered. Our team of experts will
          guide you through the process and ensure that you get the best loan
          options available.
        </p>
        <div>
          <button onClick={handleLearnMoreClick}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
