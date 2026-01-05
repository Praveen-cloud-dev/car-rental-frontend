
import React from "react";

const BookingDetailsmodal = ({ setBookingDetailsmodal, booking }) => {
  return (
    <div
      className="modal fade show"
      style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header bg-dark text-light">
            <h5 className="modal-title">Your Booking Details</h5>
            <button
              type="button"
              className="btn-close bg-light"
              onClick={() => setBookingDetailsmodal(false)}
            ></button>
          </div>

          <div className="modal-body">
            <p><b>User Name:</b> {booking?.user?.uname || "N/A"}</p>
            <p><b>Email:</b> {booking?.user?.email || "N/A"}</p>
            <p><b>Phone:</b> {booking?.user?.phone || "N/A"}</p>

            <hr />

            <p><b>Car Name:</b> {booking?.car?.name || "N/A"}</p>
            <p><b>Journey Date:</b> {booking?.startDate?.substring(0, 10)}</p>
            <p><b>Return Date:</b> {booking?.returnDate?.substring(0, 10)}</p>

            <hr />

            <p><b>Total Price:</b> ₹{booking?.totalPrice}</p>
            <p><b>Status:</b> {booking?.status}</p>
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={() => setBookingDetailsmodal(false)}
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingDetailsmodal;
