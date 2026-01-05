import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Auth/Login.jsx";
import Cars from "./pages/Car/Cars.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import CarDetails from "./pages/Car/CarDetails.jsx";
import Profile from "./pages/user/Profile.jsx";
import Service from "./pages/Service.jsx";
import Register from "./pages/Auth/Register.jsx";
import CategoryCars from "./pages/CategoryCars.jsx";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <main style={{ minHeight: "80vh", paddingTop: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />

          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* cars */}
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:type" element={<CategoryCars />} />
          <Route path="/cars/:type/:id" element={<CarDetails />} />
          {/* <Route path="/cars/:id" element={<CarDetails/>}/> */}

          {/* <Route path="/cars/category/:type" element={<CategoryCars />} /> */}
          {/* <Route path="/car/:type" element={<CategoryCars />} /> */}

          {/* user */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
