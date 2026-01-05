import React from "react";

const About = () => {
  return (
    <>
      <div className="about-wrapper container-fluid py-5">
        {/* <h2 className="text-center fw-bold mb-3 fade-in">About Us</h2> */}
        <h2 className="text-center fw-bold mb-3 fade-in about-heading">
          About Us
        </h2>

        {/* ---- WHO WE ARE SECTION ---- */}
        <div className="who-container container p-4 mt-4">
          <div className="row">
            {/* Left */}
            <div className="col-lg-6 col-md-12 fade-left">
              <h2 className="fw-bold mb-4">Who we are</h2>
              <p className="who-text">
                At <b>Car Rentals</b>, we transform your travel needs into
                smooth, comfortable, and affordable mobility solutions. Our
                mission is to offer reliable and flexible car rental services
                that make everyday travel, long trips, and business journeys
                easier.
                <br />
                <br />
                With experience, dedication, and trust, we ensure premium
                service quality, well-maintained cars, and a seamless booking
                experience. Our goal is to deliver safe, modern, and
                customer-focused travel solutions.
                <br />
                <br />
                We believe in transparency, simplicity, and delivering memorable
                travel experiences with every ride.
              </p>
            </div>

            {/* Right Stats */}
            <div className="col-lg-6 col-md-12 fade-right d-flex justify-content-center align-items-center">
              <div className="row text-center gy-4 w-100">
                <div className="col-6 stat-box">
                  <h2 className="stat-number">2020</h2>
                  <p className="stat-title">Working Since</p>
                </div>

                <div className="col-6 stat-box">
                  <h2 className="stat-number">50+</h2>
                  <p className="stat-title">Cars Available</p>
                </div>

                <div className="col-6 stat-box">
                  <h2 className="stat-number">10,000+</h2>
                  <p className="stat-title">Successful Rides</p>
                </div>

                <div className="col-6 stat-box">
                  <h2 className="stat-number">5,000+</h2>
                  <p className="stat-title">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- OUR EXPERTISE ---- */}
        <div className="container mt-5">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-md-8 fade-left">
              <h3 className="fw-bold mb-3">
                Our Expertise in Providing Smart Car Rental Solutions
              </h3>
              <p className="text-align-justify" style={{ fontSize: "17px" }}>
                Car Rentals is a fast-growing platform offering seamless and
                affordable car rental services designed to fit the needs of
                every traveler. We deliver modern mobility solutions backed by
                technology, trust, and transparency.
                <br />
                <br />
                Our aim is to provide customers with a smooth and reliable car
                booking experience using user-friendly features and high-quality
                service. Whether it’s daily commuting, business travel, family
                trips, or long-drive vacations, our platform brings a wide range
                of well-maintained vehicles at your fingertips.
                <br />
                <br />
                We leverage our industry experience, advanced technology, and
                customer-first approach to ensure every ride is safe,
                comfortable, and memorable. We keep everything simple,
                transparent, and customer-focused — without hidden charges or
                unnecessary complications.
              </p>
            </div>

            {/* Right Image */}
            <div className="col-md-4 fade-right d-flex justify-content-center">
              <img
                src="https://images.91wheels.com/assets/b_images/main/models/profile/profile1743748290.jpg?w=840&q=50"
                alt="Car Rental"
                className="car-image"
              />
            </div>
          </div>
        </div>

        {/* ---- MISSION & VISION SECTION ---- */}
        <div className="container mt-5 mission-vision-container">
          <div className="row g-4">
            {/* Mission */}
            <div className="col-lg-6 fade-left">
              <div className="mv-card">
                <h2 className="fw-bold mb-3">Our Mission</h2>
                <p>
                  Car Rentals aims to redefine modern travel by delivering
                  reliable, safe, and value-driven mobility solutions for
                  individuals, families, and businesses. Our mission is to
                  understand the evolving needs of customers and offer them the
                  most comfortable, seamless, and affordable travel experience.
                  <br />
                  <br />
                  We focus on providing clean, well-maintained vehicles,
                  transparent pricing, and a hassle-free booking process powered
                  by modern technology. Our goal is to ensure that every
                  journey—short or long—feels smooth, enjoyable, and
                  stress-free.
                  <br />
                  <br />
                  We are committed to maintaining high service standards through
                  continuous improvement, regular fleet upgrades, and
                  personalized customer assistance. Customer satisfaction,
                  safety, and trust are the foundation of our mission, and we
                  strive to exceed expectations with every ride.
                  <br />
                  <br />
                  With a customer-first mindset, our mission is not just to rent
                  cars, but to create meaningful travel experiences that people
                  can rely on again and again.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="col-lg-6 fade-right">
              <div className="mv-card">
                <h2 className="fw-bold mb-3">Our Vision</h2>
                <p>
                  Our vision is to become one of the most reliable and
                  customer-trusted car rental brands by offering simple, smart,
                  and fully accessible mobility solutions for everyone. We
                  aspire to be the first choice for travelers who seek comfort,
                  affordability, and a trouble-free journey anywhere they go.
                  <br />
                  <br />
                  We aim to transform the car rental experience through advanced
                  technology, user-friendly systems, and a service culture built
                  on honesty, consistency, and performance. Our vision is to
                  connect people with better travel opportunities by
                  continuously improving our fleet quality, service efficiency,
                  and customer convenience.
                  <br />
                  <br />
                  We are dedicated to setting new standards in the rental
                  industry by maintaining transparency, offering innovative
                  solutions, and creating long-term value for our customers. Our
                  goal is to grow into a brand recognized not only for quality
                  cars, but for exceptional customer experiences and
                  trustworthiness.
                  <br />
                  <br />
                  Ultimately, our vision is to shape the future of mobility —
                  where booking a car becomes as easy, reliable, and enjoyable
                  as the journey itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
