import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import "./ContactInfo.css";

export default function ContactInfo() {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Heading */}
      <h2 className="contact-title">✂️ Contact Our Salon</h2>
      <p className="contact-subtitle">
        We’d love to pamper you! Feel free to reach out or visit us during working hours.
      </p>

      {/* Contact Details */}
      <div className="contact-grid">
        {/* Address */}
        <motion.div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <h4 className="contact-card-title">Address</h4>
            <p className="contact-text">123 Main Street, Cityville</p>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <div>
            <h4 className="contact-card-title">Phone</h4>
            <p className="contact-text">(123) 456-7890</p>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <div>
            <h4 className="contact-card-title">Email</h4>
            <p className="contact-text">contact@mysaloon.com</p>
          </div>
        </motion.div>

        {/* Working Hours */}
        <motion.div className="contact-card">
          <FaClock className="contact-icon" />
          <div>
            <h4 className="contact-card-title">Working Hours</h4>
            <p className="contact-text">Mon-Sat: 9:00 AM - 8:00 PM</p>
          </div>
        </motion.div>
      </div>

      {/* Map Embed */}
      <motion.div
        className="contact-map"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <iframe
          title="Salon Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.164980195763!2d106.69918441525927!3d10.799301061711265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752929b8e8ef9b%3A0x5e53e8a0806c1e3!2sHair%20Salon!5e0!3m2!1sen!2sus!4v1614837600000!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </motion.div>
  );
}
