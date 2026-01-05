import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car , type}) => {
  if (!car) return null;

  return (
    <div className="car-card">
      {/* IMAGE */}
      <div className="car-image">
        <img
          src={
            car.images && car.images.length > 0
              ? `http://localhost:8080${car.images[0]}`
              : "/no-image.png"
          }
          alt={car.name}
        />
      </div>

      {/* CONTENT */}
      <div className="car-content">
        <h5 className="car-title">{car.name}</h5>

        <div className="car-specs">
          🚗 {car.seats} Seats &nbsp; | &nbsp; ⚙️ {car.transmission}
        </div>

        <div className="car-footer">
          <h4 className="car-price">
            ₹{car.price}
            <span>/day</span>
          </h4>

          <Link to={`/cars/${type}/${car._id}`} onClick={() => window.scrollTo(0, 0)}>
          {/* <Link to={`/cars/${car._id}`}> */}
            <button className="book-btn">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
