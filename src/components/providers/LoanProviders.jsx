import React, { useEffect, useState, useRef } from 'react';
import styles from './LoanProviders.module.css'; // ✅ Correct casing

// Import images from src/assets/images
import hdfc from '../../assets/images/HDFC.png';
import icici from '../../assets/images/ICICI_Logo.png';
import bajaj from '../../assets/images/Bajaj.png';
import sbi from '../../assets/images/sbi.png';

function LoanProviders() {
  const partners = [hdfc, icici, bajaj, sbi];
  const fullText = " Providing Partners";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100; 

    const typeEffect = () => {
      if (!isDeleting) {
        setDisplayText(fullText.slice(0, indexRef.current + 1));
        indexRef.current++;
        if (indexRef.current === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(fullText.slice(0, indexRef.current - 1));
        indexRef.current--;
        if (indexRef.current === 0) {
          setIsDeleting(false);
        }
      }
    };

    const timer = setInterval(typeEffect, speed);
    return () => clearInterval(timer);
  }, [isDeleting, fullText]);

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.heading}>Loan {displayText}</h2>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {/* Repeat partners twice for infinite effect */}
          {partners.concat(partners).map((logo, index) => (
            <div className={styles.slide} key={index}>
              <img src={logo} alt={`Partner Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoanProviders;
