import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/userApi";

const Register = () => {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!uname || !email || !password || !phone) {
      return toast.error("All fields are required");
    }

    try {
      const res = await registerUser({ uname, email, password, phone });

      if (res.data.success) {
        toast.success("Registration Successful");
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration Failed");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center register-page"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="p-4 shadow-lg bg-white rounded"
        style={{
          width: "100%",
          maxWidth: "450px",
          borderRadius: "12px",
        }}
      >
        <h3 className="text-center mb-4 fw-bold register-heading">
          Create an Account
        </h3>

        <form autoComplete="off">
          <div className="mb-3">
            <label className="fw-semibold">Full Name</label>
            <input
              className="form-control p-2"
              placeholder="Enter your name"
              value={uname}
              autoComplete="off"
              onChange={(e) => setUname(e.target.value)}
              style={{ borderRadius: "8px" }}
            />
          </div>

          <div className="mb-3">
            <label className="fw-semibold">Email</label>
            <input
              className="form-control p-2"
              placeholder="Enter your email"
              value={email}
              type="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderRadius: "8px" }}
            />
          </div>

          <div className="mb-3">
            <label className="fw-semibold">Password</label>
            <input
              className="form-control p-2"
              placeholder="Create a password"
              value={password}
              type="password"
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: "8px" }}
            />
          </div>

          <div className="mb-3">
            <label className="fw-semibold">Phone Number</label>
            <input
              className="form-control p-2"
              placeholder="Enter phone number"
              value={phone}
              autoComplete="off"
              onChange={(e) => setPhone(e.target.value)}
              style={{ borderRadius: "8px" }}
            />
          </div>

          <button
            className="btn btn-primary w-100 p-2 fw-semibold"
            style={{ borderRadius: "8px" }}
            onClick={handleRegister}
          >
            Register
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
