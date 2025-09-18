import React, { useState } from "react";
import "./contact.css";
import Header from "./header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data
    console.log("Form submitted:", formData);
    alert("Thank you! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Header />
    <div className="contact-container">
      <h1 className="contact-title">📬 Contact Us</h1>
      <p className="contact-intro">
        We'd love to hear from you! Whether it's a question, feedback, or support request — reach out anytime.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      <p className="contact-footer">
        You can also email us directly at <a href="mailto:support@duknow.com">support@duknow.com</a>
      </p>
    </div>
    </>
  );
};

export default Contact;
