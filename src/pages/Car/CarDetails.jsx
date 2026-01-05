import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import BookingModal from "../../components/BookingModal";
import { getCarById } from "../../Services/carApi";

const CarDetails = () => {
  const user = true; // testing
  const { type, id } = useParams();

  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const [pickupDate, setPickupDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [returnDate, setReturnDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const handleBooking = () => {
    toast.success("Booking Successful!");
    setShow(false);
  };

  useEffect(() => {
    const fetchCarDetails = async () => {
      setLoading(true);
      try {
        const res = await getCarById(id);
        console.log("Car Details Response:", res.data);
        if (res.data?.success) {
          setCarDetails(res.data.car);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchCarDetails();
  }, [id]);

  if (loading) return <h3 className="text-center">Loading...</h3>;
  if (!carDetails) return <h3 className="text-center">Car not found</h3>;

  return (
    <>
      <div className="container car-details-page mt-5 pt-4">
        <div className="row align-items-start">
          {/* LEFT IMAGE */}
          <div className="col-lg-7 col-md-6 mb-4">
            <div className="car-image-box">
              <img
                src={
                  carDetails.images?.length
                    ? `http://localhost:8080${carDetails.images[0]}`
                    : "/no-image.png"
                }
                alt={carDetails.name}
                className="img-fluid"
              />
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="col-lg-5 col-md-6">
            <div className="car-details-card">
              <h2>
                {carDetails.name} {carDetails.model}
              </h2>
              <span className="badge bg-dark mb-2">{carDetails.category}</span>

              <p className="mt-3">{carDetails.about}</p>

              <div className="car-specs">
                <p>
                  <b>Year:</b> {carDetails.year}
                </p>
                <p>
                  <b>Fuel:</b> {carDetails.fuel}
                </p>
                <p>
                  <b>Transmission:</b> {carDetails.transmission}
                </p>
                <p>
                  <b>Seats:</b> {carDetails.seats}
                </p>
                <p>
                  <b>Mileage:</b> {carDetails.milage} km/l
                </p>
              </div>

              <h3 className="price">₹{carDetails.price} / day</h3>

              <button
                className="btn btn-primary w-100 mt-3"
                onClick={() => setShow(true)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {show && (
        <BookingModal
          setShow={setShow}
          price={carDetails.price}
          carId={carDetails._id}
          carName={carDetails.name}
          pickupDate={pickupDate}
          setPickupDate={setPickupDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
        />
      )}
    </>
  );
};

export default CarDetails;
