import styles from "./home.module.css";

const Home = () => {
  const handleApplyClick = () => {
    const form = document.getElementById("contact");
    if (form) form.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={styles.homeMainContainer}>
      <div className={styles.homeHeader}>
        <h1>Welcome to MS Loans</h1>
      </div>

      <div className={styles.homeContent}>
        <div className={styles.textSection}>
          <h2 className={styles.mainText}>
            Fast, Flexible, and Affordable Loans – When You Need Them Most
          </h2>
          <p>
            At MS Loans, we make borrowing simple. Whether you're looking to
            finance a big purchase, consolidate debt, cover unexpected expenses,
            or grow your business, we offer personalized loan solutions designed
            to fit your needs and budget.
          </p>
          <h4>✅ Quick Approvals</h4>
          <p>
            Apply online in minutes and get a decision fast – no long lines or
            endless paperwork.
          </p>
          <h4>✅ Flexible Terms</h4>
          <p>
            Choose repayment plans that work for you. We offer competitive rates
            and clear terms with no hidden fees.
          </p>
          <h3>Ready to Get Started?</h3>
          <p>
            Apply now and take the first step toward achieving your financial
            goals.
          </p>
          <p>Fast and easy loans in just a few clicks.</p>
          <div className={styles.applySection}>
            <button onClick={handleApplyClick}>Apply Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
