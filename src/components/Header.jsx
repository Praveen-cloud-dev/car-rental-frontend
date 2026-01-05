import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Collapse } from "bootstrap";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // 🔥 open + close
  };

  const closeNavbar = () => {
    setIsOpen(false); // 🔥 close on link click
  };

 

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    closeNavbar();
    navigate("/login");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top shadow-sm"
        style={{
          background: "#f8f9fa",
          borderBottom: "1px solid #ddd",
          padding: "6px 0",
        }}
      >
        <div className="container">
          {/* Brand */}

          {/* <Link
            className="navbar-brand d-flex align-items-center gap-2 fw-bold"
            to="/"
          >
            <i className="bi bi-car-front-fill text-danger "></i>
            <span className="logo-text">Rental</span>
          </Link> */}
          <Link
            className="navbar-brand d-flex align-items-center gap-2 fw-bold"
            to="/"
          >
            <i className="bi bi-car-front-fill car-logo-icon"></i>
            <span className="logo-text">Rental</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
              <li className="nav-item d-flex align-items-center gap-1 nav-item-custom">
                {/* <i className="fa-solid fa-house"></i> */}
                <Link className="nav-link" to="/" onClick={closeNavbar}>
                  Home
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center gap-1 nav-item-custom">
                {/* <i className="fa-solid fa-car-side"></i> */}
                <Link className="nav-link" to="/cars" onClick={closeNavbar}>
                  All Cars
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center gap-1 nav-item-custom">
                {/* <i className="fa-solid fa-circle-info"></i> */}
                <Link className="nav-link" to="/about" onClick={closeNavbar}>
                  About
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center gap-1 nav-item-custom">
                {/* <i className="fa-solid fa-gears"></i> */}
                <Link className="nav-link" to="/service" onClick={closeNavbar}>
                  Service
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center gap-1 nav-item-custom">
                {/* <i className="fa-solid fa-phone"></i> */}
                <Link className="nav-link" to="/contact" onClick={closeNavbar}>
                  Contact
                </Link>
              </li>

              {/* ⭐ If user NOT logged in */}
              {!user && (
                <>
                  <li className="nav-item d-flex align-items-center gap-1 nav-item-custom">
                    {/* <i className="fa-solid fa-right-to-bracket"></i> */}
                    <Link
                      className="nav-link"
                      to="/login"
                      onClick={closeNavbar}
                    >
                      Login
                    </Link>
                  </li>

                  <li className="nav-item d-flex align-items-center gap-1 nav-item-custom">
                    {/* <i className="fa-solid fa-user-plus"></i> */}
                    <Link
                      className="nav-link"
                      to="/register"
                      onClick={closeNavbar}
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}

              {/* ⭐ If user logged in */}
              {user && (
                <li className="nav-item position-relative">
                  <div
                    className="nav-link d-flex align-items-center gap-2 nav-item-custom"
                    style={{ cursor: "pointer", fontSize: "25px" }}
                  >
                    {/* <i className="bi bi-person-circle"></i> */}
                    My Account
                  </div>

                  <div className="account-dropdown">
                    <Link
                      to="/profile"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      <i className="bi bi-person-circle"></i> Profile
                    </Link>

                    <div
                      className="dropdown-item text-danger"
                      style={{ cursor: "pointer" }}
                      onClick={handleLogout}
                    >
                      <i className="bi bi-box-arrow-right"></i> Logout
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
