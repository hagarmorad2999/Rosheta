import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AddQuestion() {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Question submitted successfully!");
    setQuestion("");
  };

  return (
    <div className="container my-5">
      {/* Title */}
      <motion.h2
        className="text-center fw-bold mb-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.2rem",
          background: "linear-gradient(135deg, #0D6EFD, #3A7BD5)", // درجات الأزرق
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "1px 1px 6px rgba(0,0,0,0.1)",
        }}
      >
        Ask a Medical Question
      </motion.h2>

      {/* Full Width Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="mx-auto p-5 shadow-lg rounded-4"
        style={{
          width: "100%",
          maxWidth: "100%", // Full width
          background: "#f8f9fa", // لون فاتح يشبه Vezeeta
          borderRadius: "20px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-4">
          <label
            className="form-label fw-bold"
            style={{ fontSize: "1.1rem", color: "#495057" }}
          >
            Your Question
          </label>
          <motion.textarea
            className="form-control"
            rows="5"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            whileFocus={{
              scale: 1.02,
              boxShadow: "0 0 10px rgba(13, 110, 253, 0.3)",
            }}
            style={{
              borderRadius: "12px",
              border: "1px solid #ced4da",
              padding: "15px",
              fontSize: "1rem",
              resize: "none",
              transition: "all 0.3s ease",
              backgroundColor: "#fff",
            }}
          />
        </div>

        <motion.button
          type="submit"
          className="btn w-100 fw-bold"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 20px rgba(13, 110, 253, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "14px 0",
            fontSize: "1.1rem",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #0D6EFD, #3A7BD5)", // درجات الأزرق
            border: "none",
            color: "#fff",
          }}
        >
          Submit Question
        </motion.button>
      </motion.form>
    </div>
  );
}
