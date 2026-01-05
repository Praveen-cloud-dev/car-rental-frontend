import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../pages/Contact.css";
import api from "../Services/api";

const Contact = () => {
  const [hoverCard, setHoverCard] = useState(null);
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverSocial, setHoverSocial] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name cannot be blank.";
    if (!form.email.trim()) newErrors.email = "Email cannot be blank.";
    if (!form.phone.trim()) newErrors.phone = "Mobile cannot be blank.";
    if (!form.message.trim()) newErrors.message = "Message cannot be blank.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      const payload = {
        fullName: form.name,
        email: form.email,
        mobile: form.phone,
        message: form.message,
      };

      await api.post("/contact-enquiry/create", payload);

      alert("Message sent successfully ");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  const baseShadow = "0 5px 18px rgba(0,0,0,0.08)";
  const hoverShadow = "0 12px 28px rgba(0,0,0,0.14)";

  const styles = {
    page: {
      padding: "40px 0 20px",
      fontFamily: "Poppins, sans-serif",
      background: "linear-gradient(to bottom, #f4f6fb, #eef1f7)",
      minHeight: "100vh",
    },
    title: {
      textAlign: "center",
      fontSize: "32px",
      marginBottom: "30px",
      fontWeight: "700",
      color: "#0d6efd",
    },
    container: {
      maxWidth: "1150px",
      margin: "auto",
      padding: "0 20px",
      display: "grid",
      gap: "30px",
    },
    card: (id) => ({
      background: "#fff",
      padding: "25px",
      borderRadius: "18px",
      boxShadow: hoverCard === id ? hoverShadow : baseShadow,
      transform: hoverCard === id ? "translateY(-4px)" : "translateY(0px)",
      transition: ".35s ease",
    }),
    label: { fontWeight: 600, marginBottom: "5px", display: "block" },
    input: (err) => ({
      width: "100%",
      padding: "12px 14px",
      borderRadius: "10px",
      border: err ? "1px solid #ff4d4f" : "1px solid #d0d6e1",
      background: "#f5f8ff",
      marginBottom: "4px",
      fontSize: "15px",
      outline: "none",
    }),
    phoneRow: (err) => ({
      display: "flex",
      border: err ? "1px solid #ff4d4f" : "1px solid #d0d6e1",
      background: "#f5f8ff",
      borderRadius: "10px",
      marginBottom: "4px",
      overflow: "hidden",
    }),
    flagBox: {
      padding: "12px",
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
      borderRight: "1px solid #ccc",
      background: "#fff",
    },
    errorText: { color: "#ff4d4f", fontSize: "13px", marginBottom: "10px" },
    button: {
      width: "100%",
      padding: "14px 0",
      background: hoverBtn ? "#0056d6" : "#0d6efd",
      color: "white",
      border: "none",
      borderRadius: "10px",
      fontSize: "17px",
      cursor: "pointer",
      marginTop: "10px",
      opacity: loading ? 0.7 : 1,
    },
    infoRow: (id) => ({
      display: "flex",
      gap: "15px",
      alignItems: "start",
      background: "#fff",
      padding: "18px",
      borderRadius: "14px",
      boxShadow: hoverCard === id ? hoverShadow : baseShadow,
      transform: hoverCard === id ? "translateY(-4px)" : "translateY(0px)",
      marginBottom: "16px",
      transition: ".35s ease",
    }),
    icon: { fontSize: "30px", color: "#0d6efd" },
    timingBox: (id) => ({
      background: "#fff",
      padding: "18px",
      borderRadius: "14px",
      boxShadow: hoverCard === id ? hoverShadow : baseShadow,
      transform: hoverCard === id ? "translateY(-4px)" : "translateY(0px)",
      transition: ".35s ease",
    }),
    socialRow: { display: "flex", gap: "16px", marginTop: "15px" },
    socialIcon: (id) => ({
      fontSize: "30px",
      color: hoverSocial === id ? "#0056d6" : "#0d6efd",
      cursor: "pointer",
      transform: hoverSocial === id ? "translateY(-3px)" : "translateY(0px)",
      transition: ".3s",
    }),
  };

  return (
    <div style={styles.page} className="contact-page">
      <h2 style={styles.title} className="contact-title">
        Contact Us
      </h2>

      <div style={styles.container} className="contact-container">
        <div
          style={styles.card("form")}
          className="contact-card"
          onMouseEnter={() => setHoverCard("form")}
          onMouseLeave={() => setHoverCard(null)}
        >
          <h2 style={{ textAlign: "center", color: "#0d6efd" }}>
            Send Us a Message
          </h2>

          <label style={styles.label}>Full Name *</label>
          <input
            style={styles.input(errors.name)}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p style={styles.errorText}>{errors.name}</p>}

          <label style={styles.label}>Email *</label>
          <input
            style={styles.input(errors.email)}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p style={styles.errorText}>{errors.email}</p>}

          <label style={styles.label}>Mobile *</label>
          <div style={styles.phoneRow(errors.phone)}>
            <div style={styles.flagBox}>🇮🇳 +91</div>
            <input
              style={{ border: "none", padding: "12px", flex: 1, background: "transparent" }}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          {errors.phone && <p style={styles.errorText}>{errors.phone}</p>}

          <label style={styles.label}>Message *</label>
          <textarea
            style={styles.input(errors.message)}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          {errors.message && <p style={styles.errorText}>{errors.message}</p>}

          <button
            style={styles.button}
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        <div>
          <div style={styles.infoRow("phone")} className="contact-card">
            <i className="bi bi-telephone-fill" style={styles.icon}></i>
            <div>
              <h6 className="fw-bold">Phone & WhatsApp</h6>
              <p className="mb-1">7209644236</p>
              <a href="https://wa.me/7209644236" target="_blank">WhatsApp</a>
            </div>
          </div>

          <div style={styles.infoRow("address")} className="contact-card">
            <i className="bi bi-geo-alt-fill" style={styles.icon}></i>
            <div>
              <h6 className="fw-bold">Address</h6>
              <p className="text-muted">Mohali, Punjab (India)</p>
            </div>
          </div>

          <div style={styles.infoRow("email")} className="contact-card">
            <i className="bi bi-envelope-fill" style={styles.icon}></i>
            <div>
              <h6 className="fw-bold">Email</h6>
              <p className="text-muted">help@gmail.com</p>
            </div>
          </div>

          <div style={styles.timingBox("timings")} className="contact-card">
            <h6 className="fw-bold">Call & Office Timings</h6>
            <p><b>Weekdays:</b> 9 AM – 10 PM</p>
            <p><b>Saturday:</b> 10 AM – 10 PM</p>
            <p><b>Sunday:</b> Closed</p>

            <p className="mt-2 fw-bold">You can also contact us on:</p>
            <div style={styles.socialRow}>
              <i className="bi bi-whatsapp" style={styles.socialIcon("wa")}></i>
              <i className="bi bi-facebook" style={styles.socialIcon("fb")}></i>
              <i className="bi bi-instagram" style={styles.socialIcon("ig")}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
