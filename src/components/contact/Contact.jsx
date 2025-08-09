import React, { useState, useEffect } from 'react';
import styles from './contact.module.css';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    code: '',
    phone: '',
    address: '',
    income: '',
    creditScore: '',
    reason: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  // Automatically clear the status message after 20 seconds
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage('');
      }, 10000); 

      return () => clearTimeout(timer); 
    }
  }, [statusMessage]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use import.meta.env for Vite or fallback to a default value
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/contact`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(form),
            });

      if (response.ok) {
        setStatusMessage('Form submitted successfully!');
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          code: '',
          phone: '',
          address: '',
          income: '',
          creditScore: '',
          reason: '',
        });
      } else {
        setStatusMessage('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setStatusMessage('Server error. Please try again later.');
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Talk to a professional today!</h2>


      <div className={styles.row}>
        <input name="firstName" value={form.firstName} placeholder="First name" onChange={handleChange} />
        <input name="lastName" value={form.lastName} placeholder="Last name" onChange={handleChange} />
      </div>

      <input name="email" value={form.email} placeholder="Email *" onChange={handleChange} required />

      <div className={styles.row}>
        <select name="code" value={form.code} onChange={handleChange}>
          <option value="">Code</option>
          <option value="+1">+1</option>
          <option value="+91">+91</option>
          <option value="+44">+44</option>
        </select>
        <input name="phone" value={form.phone} placeholder="Phone" onChange={handleChange} />
      </div>

      <input name="address" value={form.address} placeholder="Address *" onChange={handleChange} required />

      <div className={styles.row}>
        <input name="income" value={form.income} placeholder="Income" onChange={handleChange} />
        <input name="creditScore" value={form.creditScore} placeholder="Credit Score" type="number" onChange={handleChange} />
      </div>

      <select name="reason" value={form.reason} onChange={handleChange}>
        <option value="">Choose Loan</option>
        <option value="Home">Home</option>
        <option value="Personal">Personal Loan</option>
        <option value="Education">Education</option>
        <option value="Medical">Medical</option>
        <option value="Business">Business</option>
      </select>

      <div className={styles.btnContainer}>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </div>
      {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
    </form>
  );
};

export default Contact;
