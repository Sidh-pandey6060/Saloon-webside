import React, { useState } from "react";
import { motion } from "framer-motion";
import "./QueryForm.css";
import "./LoginForm.css";

export default function QueryForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  // Handle login input changes
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Fake login validation
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
    } else {
      alert("Please fill in all login details.");
    }
  };

  // Handle query form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit query form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your query has been submitted! We’ll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: ""
    });
  };

  return (
    <section className="query-form-section">
      {!isLoggedIn ? (
        // LOGIN FORM
        <motion.div
          className="login-form-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="login-title"> SP Salon Login</h2>
          <p className="login-subtitle">Please login to book your appointment</p>

          <form className="login-form" onSubmit={handleLoginSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="login-btn"
            >
              Login
            </motion.button>
          </form>
        </motion.div>
      ) : (
        // QUERY FORM
        <motion.div
          className="query-form-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="form-title">Book Your Style</h2>
          <p className="form-subtitle">Tell us your preferences & we’ll arrange it for you.</p>

          <form className="query-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Select Service</option>
              <option value="haircut">Haircut</option>
              <option value="shave">Shave</option>
              <option value="hair-color">Hair Coloring</option>
              <option value="facial">Facial</option>
            </select>

            <div className="datetime-group">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Additional Message (Optional)"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="submit-btn"
            >
              Submit Query
            </motion.button>
          </form>
        </motion.div>
      )}
    </section>
  );
}
