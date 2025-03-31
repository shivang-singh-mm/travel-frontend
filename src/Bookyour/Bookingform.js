import React, { useState } from "react";
import { Calendar, UserRound, Phone, Mail } from "lucide-react";

const Bookingform = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    adults: 1,
    children: 0,
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div style={{
      minHeight: "45vh",
      background: "linear-gradient(to bottom, #ebf8ff, #ffffff)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
    }}>
      <div style={{
        width: "80%",
        maxWidth: "800px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}>
        <div
          style={{
            backgroundColor: "#2563eb",
            padding: "1rem",
            display: "flex",
            alignItems: "center",  // Ensures both items align properly
            gap: "8px",
          }}
        >
          {/* <Calendar color="#ffffff" size={24} /> */}
          <h1
            style={{
              fontSize: "1.25rem",
              color: "#ffffff",
              fontWeight: "600",
              display: "flex", // Ensures it aligns properly
            }}
          >
            BOOK YOUR TRIP NOW
          </h1>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: "1.5rem", display: "grid", gap: "1.5rem" }}>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {/** Full Name **/}
            <div style={{ position: "relative" }}>
              <UserRound style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} size={20} />
              <input type="text" placeholder="Full Name" value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                style={{ width: "100%", padding: "12px 12px 12px 40px", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
            </div>

            {/** Phone **/}
            <div style={{ position: "relative" }}>
              <Phone style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} size={20} />
              <input type="tel" placeholder="Phone Number" value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: "100%", padding: "12px 12px 12px 40px", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
            </div>

            {/** Email **/}
            <div style={{ position: "relative" }}>
              <Mail style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} size={20} />
              <input type="email" placeholder="Email Id" value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: "100%", padding: "12px 12px 12px 40px", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
            </div>
          </div>

          {/** Adults, Children, Date **/}
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            <select value={formData.adults}
              onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
              style={{ padding: "12px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1} Adult{i !== 0 ? 's' : ''}</option>
              ))}
            </select>

            <select value={formData.children}
              onChange={(e) => setFormData({ ...formData, children: e.target.value })}
              style={{ padding: "12px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
              {[...Array(11)].map((_, i) => (
                <option key={i} value={i}>{i} Child{i !== 1 ? 'ren' : ''}</option>
              ))}
            </select>

            <input type="date" value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              style={{ padding: "12px", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
          </div>

          {/** Submit Button **/}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="submit" style={{
              backgroundColor: "#ea580c", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontWeight: "600",
              display: "flex", alignItems: "center", gap: "8px", cursor: "pointer",
            }}>
              SEND ENQUIRY →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bookingform;

