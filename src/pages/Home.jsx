import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../pages/CategoryStyles.css";

const Home = () => {
  const navigate = useNavigate();
  const sliderImages = [
    "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg",
    "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg",
    "https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg",
    "https://images.pexels.com/photos/193021/pexels-photo-193021.jpeg",
  ];

  // ---------- Search State ----------
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {
    console.log("Pickup:", pickup);
    console.log("Drop:", drop);
    console.log("Start:", startDate);
    console.log("End:", endDate);

    if (!pickup || !drop || !startDate || !endDate) {
      alert("Please fill all fields");
      return;
    }

    alert("Search done — check console");
  };

  // Categories Section
  const categories = [
    {
      name: "SUV",
      img: "https://cdn-icons-png.flaticon.com/128/3772/3772837.png",
    },
    {
      name: "Sedan",
      img: "https://cdn-icons-png.flaticon.com/128/18676/18676061.png",
    },
    {
      name: "Luxury",
      img: "https://cdn-icons-png.flaticon.com/128/18042/18042764.png",
    },
    {
      name: "Electric",
      img: "https://cdn-icons-png.flaticon.com/128/7787/7787240.png",
    },

     {
    name: "Hatchback",
    img: "https://cdn-icons-png.flaticon.com/128/4885/4885971.png",
  },
  {
    name: "Convertible",
    img: "https://cdn-icons-png.flaticon.com/128/7715/7715948.png",
  },
  {
    name: "Sports",
    img: "https://cdn-icons-png.flaticon.com/128/2359/2359659.png",
  },
  {
    name: "Van",
    img: "https://cdn-icons-png.flaticon.com/128/3030/3030052.png",
  },
  ];

  return (
    <>
      <div className="hero-wrapper"

        style={{
          width: "100%",
          // height: "85vh",
          position: "relative",
          overflow: "hidden",

          // marginTop: "-20px", 
          paddingTop: "0",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            background: "#fff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            zIndex: 10,
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="Pickup Location"
            className="form-control"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            style={{ flex: 1, minWidth: "200px" }}
          />

          <input
            type="text"
            placeholder="Drop Location"
            className="form-control"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            style={{ flex: 1, minWidth: "200px" }}
          />

          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{ flex: 1, minWidth: "150px" }}
          />

          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ flex: 1, minWidth: "150px" }}
          />

          <button
            className="btn btn-primary px-4"
            style={{ minWidth: "120px" }}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* ----------- SLIDER ----------- */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          style={{ height: "100%" }}
        >
          {sliderImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                style={{
                  width: "100%",
                  height: "85vh",
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    background: "rgba(0,0,0,0.35)",
                    position: "absolute",
                    inset: 0,
                  }}
                ></div>

                <div
                  style={{
                    position: "absolute",
                    top: "32%",
                    left: "8%",
                    color: "white",
                  }}
                >
                  <h1 style={{ fontSize: "55px", fontWeight: 700 }}>
                    Find Your Perfect Ride
                  </h1>
                  <p style={{ fontSize: "20px" }}>
                    Luxury • Comfort • Affordable
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= Popular Categories ================= */}
      <div className="container text-center mt-5">
        <h2 className="mb-4">Popular Categories</h2>

        <div className="row justify-content-center">
          {categories.map((cat, i) => (
            <div key={i} className="col-6 col-md-3 p-3">
              <div
                className="category-card"
                
                // onClick={() => navigate(`/cars/category/${cat.name.toLowerCase()}`)}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/cars/${cat.name.toLowerCase()}`)
                }}
              >
                <img src={cat.img} alt={cat.name} />
                <h5 className="mt-2">{cat.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* ================= PREMIUM FEATURED CARS ================= */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Featured Cars</h2>

        <div className="row">
          {/* SINGLE CAR CARD */}
          {[
            {
              name: "Scorpio N",
              img: "https://images.pexels.com/photos/29057945/pexels-photo-29057945.jpeg",
              doors: "5",
              passengers: "5",
              transmission: "Auto",
              luggage: "3 Bags",
              price: "5500",
            },
            {
              name: "Thar Roxx",
              img: "https://images.pexels.com/photos/33292351/pexels-photo-33292351.jpeg",
              doors: "5",
              passengers: "5",
              transmission: "Auto 4x4",
              luggage: "2 Bags",
              price: "6000",
            },
            {
              name: "Toyota Fortuner",
              img: "https://images.pexels.com/photos/2036544/pexels-photo-2036544.jpeg",
              doors: "5",
              passengers: "7",
              transmission: "Automatic",
              luggage: "3 Bags",
              price: "8000",
            },
          ].map((car, i) => (
            <div key={i} className="col-12 col-md-4 p-3">
              <div
                className="featured-car shadow rounded"
                style={{
                  color: "black",
                  borderRadius: "14px",
                  overflow: "hidden",
                }}
              >
                {/* IMAGE */}
                <img
                  src={car.img}
                  alt={car.name}
                  className="img-fluid"
                  style={{ width: "100%", height: "240px", objectFit: "cover" }}
                />

                {/* DETAILS */}
                <div className="p-4">
                  <h3 className="mb-3">{car.name}</h3>

                  {/* ICONS WITH DETAILS */}
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <i className="fa-solid fa-door-open"></i> Doors
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <i className="fa-solid fa-users"></i> Passengers
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <i className="fa-solid fa-gear"></i> Transmission
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <i className="fa-solid fa-suitcase-rolling"></i> Luggage
                      </div>
                    </div>

                    <div className="text-end">
                      <p className="mb-2">{car.doors}</p>
                      <p className="mb-2">{car.passengers}</p>
                      <p className="mb-2">{car.transmission}</p>
                      <p className="mb-2">{car.luggage}</p>
                    </div>
                  </div>

                  {/* PRICE + BOOK */}
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <h4 className="text-warning">
                      ₹{car.price}.00{" "}
                      <small className="text-light-black">/day</small>
                    </h4>

                    <button
                      className="btn btn-warning fw-bold px-4"
                      style={{ borderRadius: "50px" }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {/* ===== WHY CHOOSE ZETA CAR (PIXEL PERFECT) ===== */}
<div className="container my-5">
  <div className="row align-items-center zeta-wrapper">

    {/* LEFT IMAGE */}
    <div className="col-lg-6 col-12">
      <img
        src="https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg"
        className="zeta-image"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="col-lg-6 col-12 zeta-content">
      <h2 className="zeta-title">
        Why Do You Choose Zeta Car Rental Service?
      </h2>

      <p className="zeta-desc">
        Zeta Car provides you with comfort, luxury, safety, and hassle-free rides.
        Get support from our supportive team and get the best driving experiences
        of your life.
      </p>

      <div className="row zeta-features">
        <div className="col-6">
          <div className="zeta-item">
            <i className="fa-solid fa-user-check"></i>
            <h5>Verified dealer</h5>
            <p>Comfortable Car from verified dealers.</p>
          </div>
        </div>

        <div className="col-6">
          <div className="zeta-item">
            <i className="fa-solid fa-car"></i>
            <h5>Well maintained car</h5>
            <p>Experience the joy of well maintained serviced Car.</p>
          </div>
        </div>

        <div className="col-6 mt-4">
          <div className="zeta-item">
            <i className="fa-solid fa-house-circle-check"></i>
            <h5>Home delivery and return</h5>
            <p>
              Convenient home delivery and return bringing the car at your
              doorstep.
            </p>
          </div>
        </div>

        <div className="col-6 mt-4">
          <div className="zeta-item">
            <i className="fa-solid fa-lock"></i>
            <h5>No security deposit</h5>
            <p>Complete freedom with No security deposit policy.</p>
          </div>
        </div>
      </div>

      <button className="zeta-btn">Learn More</button>
    </div>

  </div>
</div>


      {/* ================= CLIENT FEEDBACK ================= */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Client Feedback</h2>
        <p className="text-center text-muted mb-5">
          Our customers love the comfort, affordability, and premium experience
          we deliver.
        </p>

        <div className="row">
          {[
            {
              name: "Rohan Verma",
              img: "https://randomuser.me/api/portraits/men/41.jpg",
              rating: 5,
              text: "Amazing experience! The booking process was extremely smooth and quick. The car was well-maintained and perfectly clean. I highly recommend this service to anyone looking for a hassle-free ride.",
            },
            {
              name: "Priya Sharma",
              img: "https://randomuser.me/api/portraits/women/55.jpg",
              rating: 4,
              text: "Very professional service. The pickup was on time, and the staff was very courteous. The car condition exceeded my expectations. Loved the overall experience!",
            },
            {
              name: "Amit Kumar",
              img: "https://randomuser.me/api/portraits/men/72.jpg",
              rating: 5,
              text: "Excellent customer support! I had a change in plan and the team handled everything politely and quickly. The car drove smoothly during my entire trip.",
            },
            {
              name: "Sonia Mehta",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
              rating: 5,
              text: "Superb service! The car was spotless and in top condition. Very comfortable drive and the price was totally worth it. I will surely book again!",
            },
            {
              name: "Harshad Patel",
              img: "https://randomuser.me/api/portraits/men/34.jpg",
              rating: 4,
              text: "Good pricing and a simple booking experience. The car was reliable and fuel-efficient. Perfect choice for long drives. Recommended!",
            },
            {
              name: "Neha Kapoor",
              img: "https://randomuser.me/api/portraits/women/12.jpg",
              rating: 5,
              text: "Loved the professionalism! Support team responded instantly, and the delivery was smooth. The car condition felt like brand new. Amazing experience overall!",
            },
          ].map((user, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">
              <div
                className="shadow p-4 text-center rounded"
                style={{
                  background: "white",
                  borderRadius: "12px",
                  transition: "0.3s",
                }}
              >
                {/* USER IMAGE */}
                <img
                  src={user.img}
                  alt={user.name}
                  className="rounded-circle mb-3"
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "cover",
                  }}
                />

                {/* NAME */}
                <h5 className="fw-bold">{user.name}</h5>

                {/* RATING */}
                <div className="text-warning mb-2">
                  {Array.from({ length: user.rating }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>

                {/* FEEDBACK TEXT */}
                <p className="text-muted">{user.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
