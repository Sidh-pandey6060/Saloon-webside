import React, { useState } from "react";
import "./SlotBooking.css";

export default function SlotBooking() {
  const [slots, setSlots] = useState([
    {
      time: "10:00 AM",
      booked: false,
      stylist: "John Doe",
      service: "Haircut",
      duration: "30 min",
      price: "$20"
    },
    {
      time: "12:00 PM",
      booked: false,
      stylist: "Emma Brown",
      service: "Beard Trim",
      duration: "20 min",
      price: "$10"
    },
    {
      time: "2:00 PM",
      booked: false,
      stylist: "Michael Smith",
      service: "Facial",
      duration: "45 min",
      price: "$25"
    },
    {
      time: "4:00 PM",
      booked: false,
      stylist: "Sophia Johnson",
      service: "Hair Coloring",
      duration: "1 hr",
      price: "$40"
    }
  ]);

  const handleBooking = (index) => {
    const updatedSlots = [...slots];
    if (!updatedSlots[index].booked) {
      updatedSlots[index].booked = true;
      setSlots(updatedSlots);
      alert(`You booked the ${updatedSlots[index].time} slot with ${updatedSlots[index].stylist}!`);
    } else {
      alert("Slot already booked!");
    }
  };

  return (
    <div className="slot-container">
      <h2 className="slot-title">💇‍♂️ Book Your Salon Appointment</h2>
      <div className="slot-grid">
        {slots.map((slot, index) => (
          <div key={index} className={`slot-card ${slot.booked ? "booked" : ""}`}>
            <h3>{slot.time}</h3>
            <p><strong>Stylist:</strong> {slot.stylist}</p>
            <p><strong>Service:</strong> {slot.service}</p>
            <p><strong>Duration:</strong> {slot.duration}</p>
            <p><strong>Price:</strong> {slot.price}</p>
            <button
              onClick={() => handleBooking(index)}
              disabled={slot.booked}
              className="slot-button"
            >
              {slot.booked ? "Booked" : "Book Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
