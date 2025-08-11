import React from "react";
import { motion } from "framer-motion";
import { FaCut, FaBrush, FaSpa, FaUserTie, FaHandSparkles } from "react-icons/fa";
import { MdOutlineSelfImprovement } from "react-icons/md"; // Head massage alternative
import "./ServiceList.css";

export default function ServiceList() {
  const services = [
    { name: "Haircut", price: "Rs100", icon: <FaCut className="service-icon" /> },
    { name: "Beard Trim", price: "Rs50", icon: <FaUserTie className="service-icon" /> },
    { name: "Hair Coloring", price: "Rs60", icon: <FaBrush className="service-icon" /> },
    { name: "Facial", price: "Rs200", icon: <FaSpa className="service-icon" /> },
    { name: "Head Massage", price: "Rs300", icon: <MdOutlineSelfImprovement className="service-icon" /> },
    { name: "Manicure", price: "Rs150", icon: <FaHandSparkles className="service-icon" /> }
  ];

  return (
    <motion.div
      className="service-list-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="service-title">💇‍♂️ Our Salon Services</h2>
      <p className="service-subtitle">
        Choose from our range of premium grooming and beauty treatments.
      </p>

      <div className="service-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            whileHover={{ scale: 1.05 }}
          >
            {service.icon}
            <div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-price">{service.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
