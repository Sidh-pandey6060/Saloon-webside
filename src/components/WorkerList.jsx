import React from "react";
import "./WorkerList.css"; // CSS file

export default function WorkerList({ workers }) {
  return (
    <div className="worker-container">
      <h2 className="worker-title">💇‍♀️ Meet Our Expert Stylists</h2>
      <p className="worker-subtitle">
        Our highly trained professionals are here to give you the perfect look.
      </p>

      <div className="worker-grid">
        {workers.map((worker, index) => (
          <div key={index} className="worker-card">
            <img src={worker.image} alt={worker.name} className="worker-image" />
            <div className="worker-info">
              <h3>{worker.name}</h3>
              <p className="worker-skill">{worker.skill}</p>
              <p className="worker-experience">Experience: {worker.experience} years</p>
              <p className="worker-specialty">Specialty: {worker.specialty}</p>
              <div className="worker-rating">
                {"⭐".repeat(worker.rating)}{" "}
                <span className="rating-text">({worker.rating} / 5)</span>
              </div>
              <button className="worker-book-btn">Book with {worker.name}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
