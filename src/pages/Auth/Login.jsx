import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/userApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please enter email and password");
    }

    try {
      const res = await loginUser({ email, password });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        toast.success("Login Successful!");
        navigate("/cars");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center login-page"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="p-4 rounded shadow-lg"
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#ffffff",
          borderRadius: "12px",
        }}
      >
        <h3 className="text-center mb-4 fw-bold">Login to Continue</h3>

        <form autoComplete="off">
          <div className="mb-3">
            <label className="fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control p-2"
              placeholder="Enter email"
              value={email}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderRadius: "8px" }}
            />
          </div>

          <div className="mb-3">
            <label className="fw-semibold">Password</label>
            <input
              type="password"
              className="form-control p-2"
              placeholder="Enter password"
              value={password}
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: "8px" }}
            />
          </div>

          <button
            className="btn btn-primary w-100 p-2 fw-semibold"
            style={{ borderRadius: "8px" }}
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
