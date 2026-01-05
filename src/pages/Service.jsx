import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

const Service = () => {
  // ========== STYLES ==========
  const styles = {
    heroSection: {
      width: "100%",
      height: "65vh",
      backgroundImage:
        "url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      marginTop: "-20px",
    },

    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.55)",
    },

    content: {
      position: "relative",
      textAlign: "center",
      zIndex: 2,
    },

    smallTitle: {
      fontSize: "16px",
      letterSpacing: "6px",
      color: "#d4a049",
      marginBottom: "10px",
      textTransform: "uppercase",
    },

    mainTitle: {
      fontSize: "48px",
      fontWeight: "700",
    },

    highlight: { color: "#d4a049" },

    underline: {
      width: "2px",
      height: "70px",
      backgroundColor: "#d4a049",
      margin: "20px auto 0",
    },

    /* OFFER SECTION */
    offerWrapper: {
      padding: "60px 20px",
      textAlign: "center",
      background: "#fff7e6",
      borderTop: "3px solid #d4a049",
      borderBottom: "3px solid #d4a049",
      marginTop: "40px",
    },

    offerTitle: {
      fontSize: "40px",
      fontWeight: "700",
      marginBottom: "10px",
      color: "#d4a049",
    },

    offerBtn: {
      padding: "12px 28px",
      background: "#d4a049",
      borderRadius: "8px",
      color: "#000",
      fontWeight: "700",
      border: "none",
      marginTop: "10px",
    },

    /* HOW IT WORKS */
    stepsWrapper: {
      padding: "80px 20px",
      background: "#f4f4f4",
      textAlign: "center",
    },

    stepsHeading: {
      fontSize: "40px",
      fontWeight: "700",
      marginBottom: "35px",
    },

    stepsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "30px",
      maxWidth: "1100px",
      margin: "0 auto",
    },

    stepCard: {
      background: "white",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    },

    stepNumber: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: "#d4a049",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "22px",
      fontWeight: "700",
      color: "#000",
      margin: "0 auto 15px",
    },

    /* SERVICES */
    serviceWrapper: {
      background: "#fff",
      padding: "90px 20px",
      color: "#000",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
      gap: "60px 40px",
      maxWidth: "1200px",
      margin: "0 auto",
    },

    card: {
      background: "#fff",
      padding: "35px 30px 80px",
      borderRadius: "22px",
      border: "1px solid #e6e6e6",
      minHeight: "240px",
      position: "relative",
      transition: "0.3s ease",
      boxShadow: "0 4px 14px rgba(0,0,0,0.07)",
    },

    cardHover: {
      transform: "translateY(-10px)",
      boxShadow: "0 18px 35px rgba(0,0,0,0.15)",
      border: "1px solid #d4a049",
    },

    numberCircle: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      background: "#d4a049",
      color: "#000",
      fontSize: "26px",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      bottom: "-40px",
      left: "50%",
      transform: "translateX(-50%)",
      boxShadow: "0px 0px 0 12px #fff",
    },

    /* COUNTERS */
    counterSection: {
      padding: "80px 20px",
      background: "#fff",
      textAlign: "center",
    },

    /* CITY MAP */
    cityWrapper: {
      padding: "80px 20px",
      background: "#f8f8f8",
      textAlign: "center",
    },

    /* CTA */
    ctaWrapper: {
      padding: "80px 20px",
      background: "#d4a049",
      textAlign: "center",
      marginTop: "50px",
      borderRadius: "12px",
      color: "#000",
      maxWidth: "1100px",
      margin: "60px auto",
    },

    ctaBtn: {
      padding: "14px 30px",
      background: "#000",
      borderRadius: "8px",
      color: "#fff",
      fontSize: "18px",
      fontWeight: "700",
      border: "none",
      marginTop: "10px",
    },

    /* POPULAR CARS */
    carSection: {
      padding: "80px 20px",
      background: "#fff",
      textAlign: "center",
    },

    /* FAQ */
    faqWrapper: {
      padding: "80px 20px",
      background: "#fff",
      maxWidth: "900px",
      margin: "0 auto",
    },
  };

  // ================= DATA =================
  const offer = "✨ Flat 20% OFF on First Booking • Limited Time!";

  const steps = [
    { title: "Choose Your Car", text: "SUV, Sedan, Luxury & More" },
    { title: "Select Pickup Details", text: "Date, Time & Location" },
    { title: "Make Payment", text: "Instant Online Confirmation" },
    { title: "Enjoy Your Ride", text: "Safe, Comfortable & On-Time" },
  ];

  const services = [
    { title: "Corporate Car Rental", text: "Premium cars for meetings." },
    { title: "Car Rental with Driver", text: "Chauffeur-driven luxury." },
    { title: "Airport Transfer", text: "Fast & reliable service." },
    { title: "Fleet Leasing", text: "Long-term company plans." },
    { title: "VIP Transfer", text: "Luxury for executives." },
    { title: "Private Transfer", text: "Local & outstation rides." },
  ];

  const faq = [
    {
      q: "Do you provide self-drive cars?",
      a: "Yes, fully insured cars available.",
    },
    {
      q: "Are airport transfers available?",
      a: "Yes, 24/7 pickup & drop service.",
    },
    { q: "Is fuel included?", a: "Fuel not included unless mentioned." },
    { q: "What documents required?", a: "Aadhar, DL & security deposit." },
  ];

  const [hoverService, setHoverService] = useState(null);

  return (
    <>
      {/* HERO */}
      <div style={styles.heroSection}>
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          <div style={styles.smallTitle}>WHAT WE DO</div>
          <div style={styles.mainTitle}>
            Our <span style={styles.highlight}>Services</span>
          </div>
          <div style={styles.underline}></div>
        </div>
      </div>

      {/* OFFER */}
      <div style={styles.offerWrapper}>
        <h2 style={styles.offerTitle}>Special Offer!</h2>
        <p style={{ fontSize: "18px" }}>{offer}</p>
        <button style={styles.offerBtn}>Book Now</button>
      </div>

      {/* HOW IT WORKS */}
      <div style={styles.stepsWrapper}>
        <h2 style={styles.stepsHeading}>How It Works</h2>

        <div style={styles.stepsGrid}>
          {steps.map((step, i) => (
            <div key={i} style={styles.stepCard}>
              <div style={styles.stepNumber}>{i + 1}</div>
              <h3 style={{ fontWeight: "700" }}>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <div style={styles.serviceWrapper}>
        <div style={styles.grid}>
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                ...styles.card,
                ...(hoverService === i ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHoverService(i)}
              onMouseLeave={() => setHoverService(null)}
            >
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <div style={styles.numberCircle}>{i + 1}</div>
            </div>
          ))}
        </div>
      </div>

      {/* COUNTERS */}
      <div style={styles.counterSection}>
        <h2 style={{ fontSize: "40px", fontWeight: "700" }}>
          Our Achievements
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            maxWidth: "1100px",
            margin: "40px auto",
          }}
        >
          {[
            { label: "Cars Available", value: "250+" },
            { label: "Happy Customers", value: "500+" },
            { label: "Trips Completed", value: "1000+" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "30px",
                borderRadius: "15px",
                background: "#f6f6f6",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              }}
            >
              <h2
                style={{
                  fontSize: "48px",
                  color: "#d4a049",
                  fontWeight: "700",
                }}
              >
                {item.value}
              </h2>
              <p style={{ fontWeight: "600" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CITY MAP — CLICKABLE CITY IMAGE VIEWER */}
      <div style={styles.cityWrapper}>
        <h2 style={{ fontSize: "40px", fontWeight: "700" }}>
          We Are Available In{" "}
          <span style={{ color: "#d4a049" }}>Major Cities</span>
        </h2>

        {/* CITY DATA */}
        {(() => {
          const cities = {
            Delhi:
              "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHx8MHx8fDA%3D",
            Mumbai:
              "https://plus.unsplash.com/premium_photo-1697730489433-4a5fe8a77f96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D",
            Bengaluru:
              "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVuZ2FsdXJ1fGVufDB8fDB8fHww",
            Hyderabad:
              "https://t3.ftcdn.net/jpg/13/63/55/88/240_F_1363558821_XmT5c677sXCwCIaOJrTQhXcbdLOS3WTQ.jpg",
            Pune: "https://media.istockphoto.com/id/1240837978/photo/the-mumbai-pune-expressway.jpg?s=612x612&w=0&k=20&c=JWvzrlGVtqLdNup30cgzTaUL4NxoMMhVazWwF4NjrKs=",
            Jaipur:
              "https://media.istockphoto.com/id/1135820309/photo/amber-fort-and-maota-lake-jaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=raUKDB1Mris9Z7SjvuuTieZRzF2-CaKukGvTC8t1kuo=",
            Lucknow:
              "https://media.istockphoto.com/id/465334746/photo/lucknow.jpg?s=612x612&w=0&k=20&c=sagryyDFCHdWqp0jAbM-ou8QwSpCRlhtuHkXLN2rek4=",
            Chandigarh:
              "https://media.istockphoto.com/id/496725996/photo/houses-surrounded-by-hills-in-himachal-india.jpg?s=612x612&w=0&k=20&c=B6yhHQjBVwzfpOwR3OAZPYilfn1GgDLOp9ceWSx7Zgw=",
          };

          // local state inside map section
          const [selectedCity, setSelectedCity] = React.useState("Delhi");

          return (
            <>
              {/* Selected City HD Image */}
              <div style={{ maxWidth: "1000px", margin: "40px auto" }}>
                <img
                  src={cities[selectedCity]}
                  alt={selectedCity}
                  style={{
                    width: "100%",
                    height: "500px",
                    borderRadius: "12px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  }}
                />
              </div>

              {/* CITY BUTTONS */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "15px",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                {Object.keys(cities).map((city) => (
                  <span
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    style={{
                      background: selectedCity === city ? "#d4a049" : "#fff",
                      padding: "10px 22px",
                      borderRadius: "8px",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                      fontWeight: "600",
                      cursor: "pointer",
                      border:
                        selectedCity === city
                          ? "2px solid #000"
                          : "2px solid transparent",
                      color: selectedCity === city ? "#000" : "#333",
                      transition: "0.3s",
                    }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </>
          );
        })()}
      </div>

      {/* CTA */}
      <div style={styles.ctaWrapper}>
        <h2 style={styles.ctaTitle}>Ready to Book Your Ride?</h2>
        <p>Fast • Safe • Reliable • 24/7 Available</p>
        <button style={styles.ctaBtn}>Book a Car Now</button>
      </div>

      {/* POPULAR CARS */}
      <div style={styles.carSection}>
        <h2
          style={{ fontSize: "45px", fontWeight: "700", marginBottom: "40px" }}
        >
          Popular <span style={{ color: "#d4a049" }}>Cars</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "35px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            {
              name: "Toyota Fortuner",
              img: "https://wallpapercave.com/wp/wp14487800.jpg",
            },
            {
              name: "Mahindra Thar",
              img: "https://wallpapercave.com/wp/wp15974292.jpg",
            },
            {
              name: "Scorpio N",
              img: "https://wallpapercave.com/wp/wp11386450.jpg",
            },
            {
              name: "Hyundai Creta",
              img: "https://wallpapercave.com/wp/wp11293862.jpg",
            },
            {
              name: "XUV 700",
              img: "https://wallpapercave.com/wp/wp10564181.jpg",
            },
            {
              name: "Innova Crysta",
              img: "https://wallpapercave.com/wp/wp3119970.jpg",
            },
          ].map((car, i) => (
            <div
              key={i}
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                border: "1px solid #eee",
                boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src={car.img}
                style={{ width: "100%", height: "230px", objectFit: "cover" }}
              />
              <h3 style={{ padding: "15px", fontWeight: "700" }}>{car.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* FLEET SLIDER */}
      <div style={{ padding: "60px 20px" }}>
        <h2
          style={{ textAlign: "center", fontSize: "40px", fontWeight: "700" }}
        >
          Our <span style={{ color: "#d4a049" }}>Premium Fleet</span>
        </h2>

        <div
          id="fleetSlider"
          className="carousel slide carousel-fade mt-4"
          data-bs-ride="carousel"
          data-bs-interval="1000"
        >
          <div className="carousel-inner">
            {[
              "https://wallpapercave.com/wp/wp14933131.webp",
              "https://wallpapercave.com/wp/wp11947705.jpg",
              "https://wallpapercave.com/wp/wp15064424.webp",
              "https://wallpapercave.com/wp/wp13756221.jpg",
              "https://wallpapercave.com/wp/wp12021925.jpg",
            ].map((img, i) => (
              <div
                className={`carousel-item ${i === 0 ? "active" : ""}`}
                key={i}
              >
                <img
                  src={img}
                  className="d-block w-100"
                  style={{
                    height: "640px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#fleetSlider"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#fleetSlider"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
      

      {/* FAQ */}
      <div style={styles.faqWrapper}>
        <h2 style={styles.faqHeading}>Frequently Asked Questions</h2>

        <Accordion defaultActiveKey="0">
          {faq.map((f, i) => (
            <Accordion.Item eventKey={i.toString()} key={i}>
              <Accordion.Header>{f.q}</Accordion.Header>
              <Accordion.Body>{f.a}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Service;
