import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>

      <p>If you have any questions or concerns, please feel free to contact us using the form below:</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='NAME'value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder='EMAIL' value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <input id="text" name="message" rows="6" placeholder='MESSAGE' value={formData.message} onChange={handleChange} required/>

        <button type="submit" className='sub'>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
