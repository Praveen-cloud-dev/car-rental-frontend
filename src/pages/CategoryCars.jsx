import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarCard from "../components/CarCard";
import { getCarsByCategory } from "../Services/carApi";

const CategoryCars = () => {
  const { type } = useParams();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCategoryCars();
  }, [type]);

  const loadCategoryCars = async () => {
    setLoading(true);
    try {
      const res = await getCarsByCategory(type);

      if (res.data?.success) {
        setCars(res.data.cars || []);
      } else {
        setCars([]);
      }
    } catch (error) {
      console.log("❌ Category cars error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container category-page">
      <h2 className="category-heading text-center text-capitalize">
        {type} Cars
      </h2>

      {loading && <h4 className="text-center">Loading...</h4>}

      <div className="row">
        {!loading && cars.length === 0 && (
          <h5 className="text-center">No cars found</h5>
        )}

        {cars.map((car) => (
          <div
            key={car._id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
          >
            <CarCard car={car} type={type} />
          </div>
        ))}
      </div>
    </div>



  );

  // return (

  //   <div className="container mt-5">
  //     <h2 className="text-center mb-4 text-capitalize">
  //       {type} Cars
  //     </h2>

  //     {loading && <h4 className="text-center">Loading...</h4>}

  //     <div className="row">
  //       {!loading && cars.length === 0 && (
  //         <h5 className="text-center">No cars found</h5>
  //       )}

  //       {cars.map((car) => (
  //         <div
  //           key={car._id}
  //           className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
  //         >
  //           <CarCard car={car} type={type} />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default CategoryCars;
