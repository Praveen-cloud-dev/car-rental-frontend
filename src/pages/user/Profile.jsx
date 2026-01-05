import React, { useState, useEffect } from "react";
import EditModal from "../../components/EditModal";
import BookingDetailsmodal from "../../components/BookingDetailsmodal.jsx";
import { getUserBooking } from "../../Services/bookingApi";

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [editModel, setEditModel] = useState(false);
  const [bookingDetailsmodal, setBookingDetailsmodal] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return {
          backgroundColor: "#fbc02d",
          color: "#000",
          padding: "4px 12px",
          borderRadius: "14px",
          fontSize: "13px",
          fontWeight: "600",
          display: "inline-block",
          textTransform: "capitalize",
        };

      case "approved":
        return {
          backgroundColor: "#1e66ff",
          color: "#fff",
          padding: "4px 12px",
          borderRadius: "14px",
          fontSize: "13px",
          fontWeight: "600",
          display: "inline-block",
          textTransform: "capitalize",
        };

      case "completed":
        return {
          backgroundColor: "#1b8f5a",
          color: "#fff",
          padding: "4px 12px",
          borderRadius: "14px",
          fontSize: "13px",
          fontWeight: "600",
          display: "inline-block",
          textTransform: "capitalize",
        };

      case "cancelled":
        return {
          backgroundColor: "#e53935",
          color: "#fff",
          padding: "4px 12px",
          borderRadius: "14px",
          fontSize: "13px",
          fontWeight: "600",
          display: "inline-block",
          textTransform: "capitalize",
        };

      default:
        return {};
    }
  };

  useEffect(() => {
    if (user?._id) {
      fetchBookings();
    }
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await getUserBooking(user._id);
      const userBookings = res.data.bookings || [];
      setBookings(userBookings);
    } catch (err) {
      console.log(err);
      setBookings([]);
    }
  };

  return (
    <>
      <div className="container profile-page" style={{ minHeight: "70vh" }}>
        <div className="mt-5">
          <p>
            <b>Name :</b> {user?.uname}
          </p>
          <p>
            <b>Email :</b> {user?.email}
          </p>
          <p>
            <b>Phone :</b> {user?.phone}
          </p>

          <button
            className="btn btn-warning mt-2"
            onClick={() => setEditModel(true)}
          >
            Edit Details
          </button>
        </div>

        <div className="mt-3">
          <h4>Your Bookings</h4>

          <table className="table mt-3 text-center">
            <thead className="bg-dark text-light">
              <tr>
                <th>Car Name</th>
                <th>Journey Date</th>
                <th>Status</th>
                <th>View</th>
              </tr>
            </thead>

            <tbody>
              {bookings.length > 0 ? (
                bookings.map((bk, i) => (
                  <tr key={i}>
                    <td>{bk.car?.name || "Car"}</td>
                    <td>{bk.startDate?.substring(0, 10)}</td>
                    <td>
                      <span style={getStatusStyle(bk.status)}>{bk.status}</span>
                    </td>

                    <td>
                      <i
                        className="fa-solid fa-eye text-primary"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setSelectedBooking(bk);
                          setBookingDetailsmodal(true);
                        }}
                      ></i>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No Bookings Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {editModel && (
        <EditModal
          editModel={editModel}
          setEditModel={setEditModel}
          user={user}
          refreshProfile={(updatedUser) => setUser(updatedUser)}
        />
      )}

      {bookingDetailsmodal && (
        <BookingDetailsmodal
          setBookingDetailsmodal={setBookingDetailsmodal}
          booking={selectedBooking}
        />
      )}
    </>
  );
};

export default Profile;
