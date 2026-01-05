import api from "./api";

// ✅ REGISTER
export const registerUser = (data) => {
  return api.post("/auth/register", data);
};

// ✅ LOGIN
export const loginUser = (data) => {
  return api.post("/auth/login", data);
};

// ✅ UPDATE
export const updateUser = (id, data) => {
  return api.patch(`/auth/update/${id}`, data);
};
