
import React, { useState } from "react";
import { createBooking } from "../Services/bookingApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BookingModal = ({
  setShow,
  price,
  pickupDate,
  setPickupDate,
  returnDate,
  setReturnDate,
  carId,
  carName,
}) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // ------- Default Safe Values (Fix uncontrolled errors) -------
  const [uName, setUName] = useState(user?.uname || "");
  const [uEmail, setUEmail] = useState(user?.email || "");
  const [uPhone, setUPhone] = useState(user?.phone || "");
  const [cName, setCName] = useState(carName || "");

  const calculateTotal = () => {
    if (pickupDate && returnDate) {
      const days = Math.max(
        1,
        Math.ceil(
          (new Date(returnDate) - new Date(pickupDate)) /
            (1000 * 60 * 60 * 24)
        )
      );
      return days * price;
    }
    return price;
  };

  const handleBooking = async () => {
    if (!user) {
      toast.error("Please login to book a car");
      setShow(false);
      navigate("/login");
      return;
    }

    if (!pickupDate || !returnDate) {
      toast.error("Please select both dates");
      return;
    }

    const total = calculateTotal();

    const bookingData = {
      user: user?._id,
      car: carId,

      userName: uName,
      userEmail: uEmail,
      userPhone: uPhone,

      carName: cName,
      carPrice: price,

      startDate: pickupDate,
      returnDate,
      price,
      totalPrice: total,
    };

    try {
      const res = await createBooking(bookingData);

      if (res.data.success) {
        toast.success("Booking Successful!");
        setShow(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  return (
    <div className="modal d-block" style={{ background: "#00000066" }}>
      <div className="modal-dialog">
        <div className="modal-content">

          {/* HEADER */}
          <div className="modal-header bg-dark text-light">
            <h5>Your Journey</h5>
            <button className="btn-close bg-light" onClick={() => setShow(false)}></button>
          </div>

          {/* BODY */}
          <div className="modal-body">
            
            <label><b>Car Name</b></label>
            <input
              type="text"
              className="form-control"
              value={cName}
              onChange={(e) => setCName(e.target.value)}
            />

            <label className="mt-3"><b>User Name</b></label>
            <input
              type="text"
              className="form-control"
              value={uName}
              onChange={(e) => setUName(e.target.value)}
            />

            <label className="mt-3"><b>Email</b></label>
            <input
              type="email"
              className="form-control"
              value={uEmail}
              onChange={(e) => setUEmail(e.target.value)}
            />

            <label className="mt-3"><b>Phone</b></label>
            <input
              type="text"
              className="form-control"
              value={uPhone}
              onChange={(e) => setUPhone(e.target.value)}
            />

            <hr />

            <label className="mt-2">Pickup Date</label>
            <input
              type="date"
              className="form-control"
              value={pickupDate || ""}
              onChange={(e) => setPickupDate(e.target.value)}
            />

            <label className="mt-3">Return Date</label>
            <input
              type="date"
              className="form-control"
              value={returnDate || ""}
              onChange={(e) => setReturnDate(e.target.value)}
            />

            <p className="mt-3">Price: ₹{price}/day</p>
            <h4>Total: ₹{calculateTotal()}</h4>
          </div>

          {/* FOOTER */}
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={() => setShow(false)}>
              Close
            </button>
            <button className="btn btn-primary" onClick={handleBooking}>
              Book
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;
