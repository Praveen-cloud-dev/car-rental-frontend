import React, { useEffect, useState } from "react";
import CarCard from "../../components/CarCard";
import { getAllCars } from "../../Services/carApi";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    setLoading(true);

    try {
      const res = await getAllCars();

      console.log("Backend Response:", res.data);

      if (res.data?.success) {
        setCars(res.data.cars || []);
      } else {
        setCars([]);
      }
    } catch (error) {
      console.log("❌ Error fetching cars:", error);
    }

    setLoading(false);
  };

  return (
    <div className="container py-5" style={{ minHeight: "80vh" }}>
      <h3 className="text-center mb-1 cars-heading">
        Explore our Car Collection
      </h3>
      <p className="text-center cars-subheading">
        Click on the car to see specs & price
      </p>

      {/* Loading UI */}
      {loading && <h4 className="text-center mt-5">Loading cars...</h4>}

      

      <div className="container mt-4">
        <div className="row">
          {!loading && cars.length === 0 && (
            <h5 className="text-center mt-4">No cars available</h5>
          )}

          {cars.map((car) => (
            <div
              key={car._id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            >
              <CarCard car={car} type={car.category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
