import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";

export default function DoctorCard({ doctor }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  function handleBooking() {
    if (!user) return;
    navigate(`/booking/${doctor.id}`);
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
        className="card mb-3 shadow-sm"
      >
        <div className="card mb-3 shadow-sm">
          <div className="row g-0 align-items-center">

            {/* Doctor Image */}
            <div className="col-sm-12 col-md-6 col-lg-3 text-center p-3">
              <img
                src={doctor.image}
                alt=""
                className="rounded-circle border border-3"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </div>

            {/* Doctor Info */}
          <div className="col-12 col-sm-9 ps-sm-4 ps-3">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">
                  {doctor.name}
                </h5>

                <p className="mb-1 text-muted">
                  {doctor.specialty}
                </p>

                <p className="mb-1">
                  ⭐ {doctor.rating} | {doctor.reviews} Reviews
                </p>

                <p className="mb-0 text-muted">
                  📍 {doctor.location}
                </p>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="row g-0 align-items-center">
            <div className="col-12">
              <div className="text-center p-3 border-start">
                <p className="fw-bold mb-2">
                  Fees: {doctor.price} EGP
                </p>

                <button
                  className="btn btn-primary w-100"
                  disabled={!user}                 // 👈 هنا المفتاح
                  onClick={handleBooking}
                >
                  Book Appointment
                </button>

                {!user && (
                  <small className="text-muted d-block mt-2">
                    Please login to book an appointment
                  </small>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
