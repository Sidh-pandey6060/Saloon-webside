import React from "react";
import QueryForm from "./components/QueryForm";
import WorkerList from "./components/WorkerList";
import SlotBooking from "./components/SlotBooking";
import ServiceList from "./components/ServiceList";
import ContactInfo from "./components/ContactInfo";
import "./App.css"; // New CSS file

const workersData = [
  { name: "John Doe", skill: "Hair Stylist", experience: 5 },
  { name: "Jane Smith", skill: "Makeup Artist", experience: 3 },
  { name: "Mike Lee", skill: "Barber", experience: 4 }
];

export default function App() {
  return (
    <div className="app">
      {/* Logo and Title */}
      <div className="logo-container">
        <img src="/logo.png" alt="Salon Logo" className="logo" />
        <h1 className="title">SP Saloon</h1>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#contact-info">Contact</a>
        <a href="#query-form">Query</a>
        <a href="#services">Services</a>
        <a href="#workers">Workers</a>
        <a href="#slots">Slot Booking</a>
      </nav>

      {/* Hairstyle Carousel */}
      <div className="section">
        <h2 className="section-title">Popular Hairstyles</h2>
        <div className="carousel-container">
          <div className="hairstyle-carousel">
            {/* First set */}
            <div className="hairstyle-box">
              <img src="/assets/pexels.jpg" alt="Style 1" />
              <p>Classic Cut</p>
            </div>
            <div className="hairstyle-box">
              <img src="/assets/profile_richard.png" alt="Style 2" />
              <p>Layered Hair</p>
            </div>
            <div className="hairstyle-box">
              <img src="/assets/picture-excited-young-caucasian-man-with-busht-beard-shaved-head-pointing-fore-finger-as-if-he-knows-your-secret-smiling-mysteriously-human-facial-expressions-body-language.jpg" alt="Style 3" />
              <p>Buzz Cut</p>
            </div>
            {/* Duplicate set for smooth looping */}
            <div className="hairstyle-box">
              <img src="/assets/ahmad.jpg" alt="Style 1" />
              <p>Classic Cut</p>
            </div>
            <div className="hairstyle-box">
              <img src="/assets/pix.jpg" alt="Style 2" />
              <p>Layered Hair</p>
            </div>
            <div className="hairstyle-box">
              <img src="/assets/picture-excited-young-caucasian-man-with-busht-beard-shaved-head-pointing-fore-finger-as-if-he-knows-your-secret-smiling-mysteriously-human-facial-expressions-body-language.jpg" alt="Style 3" />
              <p>Buzz Cut</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div id="services" className="section">
        <ServiceList />
      </div>

      <div id="workers" className="section">
        <WorkerList workers={workersData} />
      </div>

      <div id="slots" className="section">
        <SlotBooking />
      </div>

      <div id="query-form" className="section">
        <QueryForm />
      </div>

      <div id="contact-info" className="section">
        <ContactInfo />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>🚗 We also offer premium car spa services — detailing, polishing & full paint protection.</p>
        <p>© 2025 SP Saloon & Car Care</p>
      </footer>
    </div>
  );
}
