
import { useState, useContext } from "react";
import DoctorList from "../component/Doctor/DoctorList";
import { motion } from "framer-motion";
import BookingModal from "../component/Booking/BookingModal";
import slider1 from "../../src/images/slider4.jpg";
import slider2 from "../../src/images/slider2.jpg";
import slider3 from "../../src/images/slider1.jpg";
import { DoctorsContext}  from "../../src/context/DoctorContext";

export default function Home() {
  // ✅ قراءة آمنة من الـ context
  const doctorsContext = useContext(DoctorsContext);
  const doctors = doctorsContext?.doctors || []; // 🔥 الحل هنا

  const [openModal, setOpenModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleBook = (doctor) => {
    setSelectedDoctor(doctor);
    setOpenModal(true);
  };

  const [search, setSearch] = useState("");

  // فلترة الأطباء حسب البحث (آمنة 100%)
  const filtered = doctors.filter(d =>
    d.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container py-4">

        <h4
          style={{
            fontSize: "2.2rem",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            backgroundImage: "linear-gradient(30deg, #0B5ED7, #13ef7a,#ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          Book the Best Doctors Near You
        </h4>

        {/* ================= Hero Image Slider ================= */}
        <div className="my-4">
          <div
            id="heroSlider"
            className="carousel slide carousel-fade shadow rounded-4 overflow-hidden"
            data-bs-ride="carousel"
            data-bs-interval="4000"
            style={{ height: "380px" }}
          >
            <div className="carousel-indicators">
              <button data-bs-target="#heroSlider" data-bs-slide-to="0" className="active"></button>
              <button data-bs-target="#heroSlider" data-bs-slide-to="1"></button>
              <button data-bs-target="#heroSlider" data-bs-slide-to="2"></button>
            </div>

            <div className="carousel-inner h-100">
              <div className="carousel-item active h-100">
                <img src={slider1} className="d-block w-100 h-100" alt="Doctors" style={{ objectFit: "cover" }} />
              </div>
              <div className="carousel-item h-100">
                <img src={slider2} className="d-block w-100 h-100" alt="Medical Care" style={{ objectFit: "cover" }} />
              </div>
              <div className="carousel-item h-100">
                <img src={slider3} className="d-block w-100 h-100" alt="Hospital" style={{ objectFit: "cover" }} />
              </div>
            </div>

            <button className="carousel-control-prev" data-bs-target="#heroSlider" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" data-bs-target="#heroSlider" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="mb-4">
          <div className="position-relative mx-auto" style={{ maxWidth: "100%" }}>
            <input
              type="text"
              placeholder="Search by specialty..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="form-control shadow-sm"
              style={{
                width: "100%",
                paddingLeft: "2.5rem",
                paddingRight: "1rem",
                height: "50px",
                borderRadius: "0.5rem",
                fontSize: "1rem",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#20c997",
                fontSize: "1.1rem",
                pointerEvents: "none",
              }}
            >
              🔍
            </span>
          </div>
        </div>

        {/* قائمة الأطباء */}
        <DoctorList doctors={filtered} handleBook={handleBook} />

        {/* Modal للحجز */}
        {openModal && selectedDoctor && (
          <BookingModal
            doctor={selectedDoctor}
            close={() => setOpenModal(false)}
          />
        )}

      </div>
    </motion.div>
  );
}
