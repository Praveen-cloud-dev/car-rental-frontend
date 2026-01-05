import api from "./api";

// Get all cars
export const getAllCars = async () => {
  return await api.get("/car/get-all");
};

// Get single car (by ID)
export const getCarById = async (id) => {
  return await api.get(`/car/${id}`);
};

export const getCarsByCategory = async (category) => {
  return await api.get(`/car/category/${category}`);
};

// Add car
export const addCar = async (data) => {
  return await api.post("/car/add-car", data);
};

// Update car
export const updateCar = async (id, data) => {
  return await api.patch(`/car/update-car/${id}`, data);
};

// Delete car
export const deleteCar = async (id) => {
  return await api.delete(`/car/delete-car/${id}`);
};
