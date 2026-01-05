import api from "./api";

// Get token
const getToken = () => `Bearer ${localStorage.getItem("token")}`;

// Create Booking
export const createBooking = async (data) => {
  return await api.post("/booking/create", data, {
    headers: {
      Authorization: getToken(),
    },
  });
};

// Get All Bookings (Admin)
export const getAllBookings = async () => {
  return await api.get("/booking/get-all");
};

// Get Booking Details (Admin)
export const getBookingDetails = async (id) => {
  return await api.get(`/booking/get-details/${id}`, {
    headers: {
      Authorization: getToken(),
    },
  });
};

// Get User Booking (Protected)
export const getUserBooking = async (userId) => {
  return await api.get(`/booking/user-booking/${userId}`, {
    headers: {
      Authorization: getToken(),
    },
  });
};

// Update Booking Status (Admin)
export const updateBookingStatus = async (id, data) => {
  return await api.patch(`/booking/update-status/${id}`, data, {
    headers: {
      Authorization: getToken(),
    },
  });
};
