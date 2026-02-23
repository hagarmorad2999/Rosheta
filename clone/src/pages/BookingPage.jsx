

import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import doctorsData from "../data/doctors";
import { BookingContext } from "../context/BookingContext";
import { AuthContext } from "../context/AuthContext"; // 🆕

export default function BookingPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const doctor = doctorsData.find(d => d.id === parseInt(id));

  const { addBooking } = useContext(BookingContext); // 🆕
  const { user } = useContext(AuthContext);          // 🆕

  const [slot, setSlot] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!slot || !patientName || !patientEmail || !patientPhone) {
      alert("Please fill all fields");
      return;
    }

    // ===============================
    // ✅ الحجز الحقيقي
    // ===============================
    addBooking({
      doctor: {
        name: doctor.name,
        specialty: doctor.specialty,
        price: doctor.price
      },
      slot,
      patient: {
        name: patientName,
        email: patientEmail,
        phone: patientPhone
      },
      userEmail: user?.email
    });

    alert("Booking Successful!");
    navigate("/profile"); // الأفضل يروح على البروفايل
  };

  if (!doctor) return <p>Doctor not found</p>;

  return (
    <div className="container py-5">
      <p
        className="mb-4 text-primary"
        style={{
          fontSize: "2rem",
          fontWeight: 500,
          letterSpacing: "-0.5px",
          backgroundImage: "linear-gradient(4deg, #0B5ED7, #13ef7a,#ffffff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Book Appointment with {doctor.name}
      </p>

      <div
        className="card shadow"
        style={{ maxWidth: "500px", margin: "0 auto", borderRadius: "0.5rem" }}
      >
        <h5
          style={{
            fontWeight: 700,
            backgroundColor: "#0D6EFD",
            color: "white",
            padding: "12px 20px",
            textAlign: "center",
            margin: 0,
          }}
        >
          Enter Booking Details
        </h5>

        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Patient Name</label>
              <input
                type="text"
                className="form-control"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={patientEmail}
                onChange={(e) => setPatientEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Select Slot</label>
              <select
                className="form-select"
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                required
              >
                <option value="">Select Slot</option>
                {doctor.slots.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>

              <button type="submit" className="btn btn-success">
                Book & Pay {doctor.price} EGP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}




