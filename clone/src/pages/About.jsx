import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import doctorAnimation from "../../src/images/Medical app.json";
import appointmentAnimation from "../../src/images/business Goal.json";

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container my-5">

      {/* Main Title */}
      <motion.h1
        className="text-center fw-bold mb-5 display-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: "linear-gradient(130deg, #0D6EFD, #13EF7A, #FF6B6B, #FFD93D)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "2px 2px 10px rgba(0,0,0,0.2)"
        }}
      >
        About Rosheta
      </motion.h1>

      {/* Introduction */}
<motion.section
  className="mb-5 p-5 shadow-lg rounded-5 d-flex align-items-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={sectionVariants}
  transition={{ duration: 0.8 }}
  style={{
    background: "radial-gradient(circle at top left, #f9f9ff, #cce7ff, #a1d1ff)",
    clipPath: "polygon(0 0, 100% 5%, 100% 85%, 0% 100%)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",  // يوسّط العناصر أفقياً
    alignItems: "center",      // يوسّط العناصر عمودياً
    gap: "30px",
    minHeight: "300px",        // ارتفاع مناسب للتوسيط العمودي
  }}
>
  <div style={{ flex: "1 1 350px", textAlign: "center" }}>
    <h3 className="fw-bold text-primary mb-3">Introduction</h3>
    <p style={{ lineHeight: "1.7", fontSize: "1.1rem", color: "#2c3e50" }}>
      Our medical booking platform allows patients to easily find doctors, book appointments, 
      and manage their healthcare visits. Admins can manage doctors, patients, and schedules efficiently. 
      The system is fully responsive, interactive, and designed for a modern user experience.
    </p>
  </div>
  <div style={{ flex: "1 1 300px" }}>
    <Lottie animationData={doctorAnimation} loop={true} />
  </div>
</motion.section>


      {/* Mission & Vision */}
   <motion.section
  className="mb-5 p-5 shadow-lg rounded-5 d-flex align-items-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={sectionVariants}
  transition={{ duration: 0.8, delay: 0.2 }}
  style={{
    background: "linear-gradient(135deg, #e0ffe0 0%, #b2f7b2 40%, #75e0a8 100%)",
    clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",  // يوسّط العناصر أفقياً
    alignItems: "center",      // يوسّط العناصر عمودياً
    gap: "25px",
    minHeight: "300px",        // ارتفاع مناسب للتوسيط العمودي
  }}
>
  <div style={{ flex: "1 1 350px", textAlign: "center" }}>
    <h3 className="fw-bold text-success mb-3">Mission & Vision</h3>
    <p style={{ lineHeight: "1.7", fontSize: "1.1rem", color: "#2c3e50" }}>
      Our mission is to provide fast, reliable access to healthcare. 
      Our vision is to connect patients with the right doctors efficiently, 
      creating a seamless experience for both users and healthcare providers.
    </p>
  </div>
  <div style={{ flex: "1 1 300px" }}>
    <Lottie animationData={appointmentAnimation} loop={true} />
  </div>
</motion.section>


      {/* Our Services */}
      <motion.section
        className="mb-5 p-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          background: "linear-gradient(135deg, #f0f8ff, #d0ebff, #b3e0ff)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
          paddingTop: "80px",
          paddingBottom: "80px",
          borderRadius: "50px",
          position: "relative",
        }}
      >
        <h3 className="fw-bold text-primary text-center w-100 mb-5" style={{ fontSize: "2.4rem" }}>
          Our Services
        </h3>

        {["Doctor Finder","Secure Booking","Management Dashboard","Responsive & Interactive"].map((title, i) => (
          <motion.div
            key={i}
            className="capsule"
            style={{
              background: i===0 
                ? "linear-gradient(145deg, #4facfe, #00f2fe)"
                : i===1 
                ? "linear-gradient(145deg, #43e97b, #38f9d7)"
                : i===2 
                ? "linear-gradient(145deg, #ffafbd, #ffc3a0)"
                : "linear-gradient(145deg, #fddb92, #d1fdff)",
              padding: "40px 50px",
              minWidth: "280px",
              maxWidth: "320px",
              clipPath: i===0
                ? "polygon(20% 0%, 100% 10%, 85% 100%, 0% 90%)"
                : i===1
                ? "polygon(0% 5%, 90% 0%, 100% 85%, 10% 100%)"
                : i===2
                ? "polygon(10% 0%, 100% 20%, 90% 100%, 0% 80%)"
                : "polygon(0% 10%, 90% 0%, 100% 90%, 10% 100%)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
              color: i===3 ? "#333" : "#fff",
              border: "2px solid rgba(255,255,255,0.3)",
              cursor: "pointer",
              zIndex: i % 2 === 0 ? 1 : 2,
            }}
            animate={{
              y: [0, -15, 0, 10, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <h5 className="fw-bold mb-2">{title}</h5>
            <p>
              {title === "Doctor Finder" && "Locate specialized doctors worldwide by specialty, rating, and fees instantly."}
              {title === "Secure Booking" && "Book your appointments online quickly and securely with selected doctors."}
              {title === "Management Dashboard" && "Admins can manage doctors, users, and appointments efficiently."}
              {title === "Responsive & Interactive" && "Enjoy smooth, interactive UI with fully responsive design for all devices."}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* Contact Us */}
 <motion.section
  className="mb-5 p-5 rounded-5 position-relative"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={sectionVariants}
  transition={{ duration: 0.8, delay: 0.6 }}
  style={{
    background: "linear-gradient(135deg, #e3f2fd, #c8e6f9)",
    clipPath: "polygon(0 5%, 100% 0%, 100% 95%, 0 100%)",
    overflow: "visible",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "60px",
    padding: "80px 30px",
  }}
>
  {/* Section Title */}
  <h2 
    style={{
      gridColumn: "1 / -1",  // يشغل كامل الأعمدة
      textAlign: "center",
      color: "#0288d1",
      fontWeight: "700",
      fontSize: "2.2rem",
      marginBottom: "40px"
    }}
  >
    Contact Us
  </h2>

  {/* Advanced Curved Connecting Arrows */}
  <svg
    width="100%"
    height="100%"
    style={{ position: "absolute", top: 0, left: 0, zIndex: 0, pointerEvents: "none" }}
  >
    <defs>
      <linearGradient id="arrowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0288d1" stopOpacity="1" />
        <stop offset="100%" stopColor="#81d4fa" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="arrowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#43a047" stopOpacity="1" />
        <stop offset="100%" stopColor="#a5d6a7" stopOpacity="1" />
      </linearGradient>
      <marker id="arrow1" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
        <polygon points="0 0, 12 6, 0 12" fill="url(#arrowGrad1)" />
      </marker>
      <marker id="arrow2" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
        <polygon points="0 0, 12 6, 0 12" fill="url(#arrowGrad2)" />
      </marker>
    </defs>
    <path
      d="M50 180 C180 50, 300 250, 500 120"
      stroke="url(#arrowGrad1)"
      strokeWidth="3"
      fill="transparent"
      strokeDasharray="8,5"
      markerEnd="url(#arrow1)"
      style={{ filter: "drop-shadow(0 0 4px #0288d1)" }}
    />
    <path
      d="M400 200 C450 50, 650 350, 700 250"
      stroke="url(#arrowGrad2)"
      strokeWidth="3"
      fill="transparent"
      strokeDasharray="10,6"
      markerEnd="url(#arrow2)"
      style={{ filter: "drop-shadow(0 0 4px #43a047)" }}
    />
    <path
      d="M100 400 C200 300, 500 450, 600 350"
      stroke="#0288d1"
      strokeWidth="2.5"
      fill="transparent"
      strokeDasharray="6,4"
      markerEnd="url(#arrow1)"
      style={{ opacity: 0.7 }}
    />
    <circle cx="500" cy="120" r="6" fill="#0288d1" />
    <circle cx="700" cy="250" r="6" fill="#43a047" />
    <circle cx="600" cy="350" r="5" fill="#0288d1" />
  </svg>

  {/* Column 1 - Email */}
  <motion.div
    className="p-5 shadow-lg rounded-4"
    style={{
      background: "linear-gradient(135deg, #0288d1, #03a9f4)",
      color: "#fff",
      boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
      zIndex: 1,
      position: "relative",
    }}
    whileHover={{ scale: 1.08, rotate: [0, 2, 0] }}
    transition={{ duration: 0.5 }}
  >
    <h5 className="fw-bold mb-2">Email</h5>
    <p>support@rosheta.com</p>
  </motion.div>

  {/* Column 2 - Phone */}
  <motion.div
    className="p-5 shadow-lg rounded-4"
    style={{
      background: "linear-gradient(135deg, #43a047, #66bb6a)",
      color: "#fff",
      boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
      zIndex: 1,
      position: "relative",
    }}
    whileHover={{ scale: 1.08, rotate: [0, -2, 0] }}
    transition={{ duration: 0.5 }}
  >
    <h5 className="fw-bold mb-2">Phone</h5>
    <p>+20 100 123 4567</p>
  </motion.div>

  {/* Column 3 - Address */}
  <motion.div
    className="p-5 shadow-lg rounded-4"
    style={{
      background: "linear-gradient(135deg, #0288d1, #81d4fa)",
      color: "#fff",
      boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
      zIndex: 1,
      position: "relative",
    }}
    whileHover={{ scale: 1.08, rotate: [0, 3, 0] }}
    transition={{ duration: 0.5 }}
  >
    <h5 className="fw-bold mb-2">Address</h5>
    <p>123 Health Street, Cairo, Egypt</p>
  </motion.div>
</motion.section>

    </div>
  );
}
