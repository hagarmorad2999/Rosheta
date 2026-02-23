import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MedicalInfo() {
  const [selectedArticle, setSelectedArticle] = useState(null);
const navigate = useNavigate();

  const articles = [
    {
      title: "Migraine Headache Causes",
      summary: "Causes, symptoms, prevention and when to see a doctor.",
      details: {
        causes: "Stress, lack of sleep, hormonal changes, loud noise.",
        symptoms: "Severe headache, nausea, sensitivity to light.",
        prevention: "Regular sleep, avoid triggers, hydration.",
        doctor: "If headache is frequent or very severe, consult a doctor."
      }
    },
    {
      title: "Cold vs Flu",
      summary: "Causes, symptoms, prevention and when to see a doctor.",
      details: {
        causes: "Viral infection (Rhinovirus for cold, Influenza virus for flu).",
        symptoms: "Flu is more severe with high fever and body pain.",
        prevention: "Hand washing, vaccination, healthy habits.",
        doctor: "See a doctor if fever lasts more than 3 days."
      }
    },
    {
      title: "Anemia Symptoms",
      summary: "Causes, symptoms, prevention and when to see a doctor.",
      details: {
        causes: "Iron deficiency, poor nutrition, chronic disease.",
        symptoms: "Fatigue, dizziness, pale skin.",
        prevention: "Eat iron-rich foods and supplements if necessary.",
        doctor: "Consult a doctor if fatigue is persistent."
      }
    }
  ];

  return (
    <div className="container-fluid bg-light py-5 mt-5">

      {/* ================= Page Header ================= */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="fw-bold text-primary">
          <i className="bi bi-heart-pulse-fill me-2"></i>
          Medical Information Center
        </h2>
        <p className="text-muted mt-2">
          <i className="bi bi-info-circle-fill me-2"></i>
          Trusted medical content to help you make better health decisions
        </p>
      </motion.div>

      {/* ================= Alert ================= */}
      <div className="container mb-4">
        <div className="alert alert-primary alert-dismissible fade show shadow-sm">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          This content is for awareness only and does not replace medical consultation.
          <button className="btn-close" data-bs-dismiss="alert"></button>
        </div>
      </div>

      {/* ================= Medical Articles ================= */}
      <div className="container mb-5">
        <h4 className="fw-bold text-primary mb-4">
          <i className="bi bi-journal-medical me-2"></i>
          Medical Articles
        </h4>

        <div className="row g-4">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              className="col-md-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <span className="badge bg-primary mb-2">
                    <i className="bi bi-file-earmark-text me-1"></i> Article
                  </span>
                  <h5 className="fw-bold">
                    <i className="bi bi-stethoscope me-2"></i>
                    {article.title}
                  </h5>
                  <p className="text-muted small">
                    <i className="bi bi-card-text me-1"></i>
                    {article.summary}
                  </p>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#articleModal"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <i className="bi bi-eye-fill me-1"></i> Read More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= Common Diseases ================= */}
      <div className="container mb-5">
        <h4 className="fw-bold text-primary mb-4">
          <i className="bi bi-virus me-2"></i>
          Common Diseases
        </h4>

        <div className="row g-4">
          {[ 
            { name: "Diabetes", icon: "bi-droplet-half", icon2: "🩸" },
            { name: "Hypertension", icon: "bi-activity", icon2: "💓" },
            { name: "Anemia", icon: "bi-heart", icon2: "❤️" },
            { name: "Allergy", icon: "bi-shield-exclamation", icon2: "🤧" }
          ].map((d, i) => (
            <div key={i} className="col-md-3">
              <div className="card text-center shadow-sm h-100">
                <div className="card-body">
                  <i className={`bi ${d.icon} text-primary fs-1 mb-2`}></i>
                  <div className="fs-2 mb-2">{d.icon2}</div>
                  <h6 className="fw-bold">{d.name}</h6>
                  <button className="btn btn-sm btn-primary mt-2">
                    <i className="bi bi-info-circle-fill me-1"></i> Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Symptoms Checker ================= */}
      <div className="container mb-5">
        <h4 className="fw-bold text-primary mb-3">
          <i className="bi bi-clipboard2-pulse me-2"></i>
          Symptoms Checker
        </h4>

        <div className="card shadow-sm">
          <div className="card-body">
            <p className="text-muted">
              <i className="bi bi-search me-1"></i>
              Select your symptoms to know the possible condition and specialty.
            </p>

            {["Headache", "Fever", "Fatigue", "Skin Rash"].map((s, i) => (
              <div key={i} className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  <i className="bi bi-patch-exclamation me-1"></i> {s}
                </label>
              </div>
            ))}

            <button className="btn btn-primary mt-3">
              <i className="bi bi-check2-circle me-1"></i> Check Result
            </button>

            <div className="mt-3">
              <span className="badge bg-info me-2">
                <i className="bi bi-exclamation-circle me-1"></i> Possible Disease
              </span>
              <span className="badge bg-success">
                <i className="bi bi-person-badge me-1"></i> Recommended Specialty
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Medical Tips ================= */}
      <div className="container mb-5">
        <h4 className="fw-bold text-primary mb-4">
          <i className="bi bi-lightbulb-fill me-2"></i>
          Daily Medical Tips
        </h4>

        <div className="row g-3">
          {["Drink Water", "Sleep Well", "Eat Healthy"].map((tip, i) => (
            <div key={i} className="col-md-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <i className="bi bi-check-circle-fill text-success fs-3"></i>
                  <div className="fs-2">💡</div>
                  <p className="fw-semibold mt-2">{tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FAQ ================= */}
  <div className="container mb-5">
  <h4 className="fw-bold text-primary mb-4">
    <i className="bi bi-question-circle-fill me-2"></i>
    Frequently Asked Questions (FAQ)
  </h4>

  <div className="accordion shadow-sm" id="faq">

    {/* Item 1 */}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#f1"
        >
          <i className="bi bi-exclamation-circle text-primary me-2"></i>
          Is constant headache dangerous?
        </button>
      </h2>
      <div
        id="f1"
        className="accordion-collapse collapse"
        data-bs-parent="#faq"
      >
        <div className="accordion-body">
          Constant headaches may be harmless, but if they occur frequently or are severe,
          you should consult a doctor to rule out underlying conditions.
        </div>
      </div>
    </div>

    {/* Item 2 */}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#f2"
        >
          <i className="bi bi-heart-pulse-fill text-danger me-2"></i>
          How often should I do medical checkups?
        </button>
      </h2>
      <div
        id="f2"
        className="accordion-collapse collapse"
        data-bs-parent="#faq"
      >
        <div className="accordion-body">
          It is recommended to have a full medical checkup at least once a year,
          especially if you have chronic diseases or a family history of illness.
        </div>
      </div>
    </div>

    {/* Item 3 */}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#f3"
        >
          <i className="bi bi-droplet-fill text-info me-2"></i>
          How much water should I drink daily?
        </button>
      </h2>
      <div
        id="f3"
        className="accordion-collapse collapse"
        data-bs-parent="#faq"
      >
        <div className="accordion-body">
          Most adults should drink between 2 to 3 liters of water per day,
          depending on activity level and weather conditions.
        </div>
      </div>
    </div>

    {/* Item 4 */}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#f4"
        >
          <i className="bi bi-activity text-success me-2"></i>
          Does exercise really improve health?
        </button>
      </h2>
      <div
        id="f4"
        className="accordion-collapse collapse"
        data-bs-parent="#faq"
      >
        <div className="accordion-body">
          Yes, regular exercise improves heart health, boosts immunity,
          reduces stress, and helps maintain a healthy weight.
        </div>
      </div>
    </div>

  </div>
</div>


      {/* ================= Ask Doctor ================= */}
      <div className="container mb-5 text-center">
<button
  className="btn btn-lg btn-primary shadow"
  onClick={() => navigate("/questions")}
>
  <i className="bi bi-chat-dots-fill me-2"></i>
  Ask a Doctor Now
</button>

      </div>

      {/* ================= Emergency Info ================= */}
      <div className="container mb-5">
        <div className="alert alert-danger shadow">
          <h5 className="fw-bold">
            <i className="bi bi-telephone-fill me-2"></i>
            Emergency Information
          </h5>
          <ul className="mb-0">
            <li>🚑 Ambulance: 123</li>
            <li>🔥 Burns: Cool area with water</li>
            <li>😵 Fainting: Lay patient flat</li>
          </ul>
        </div>
      </div>

      {/* ================= Article Modal ================= */}
      <div className="modal fade" id="articleModal" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-primary">
                <i className="bi bi-file-medical-fill me-2"></i>
                {selectedArticle?.title}
              </h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {selectedArticle && (
                <>
                  <p><strong>🩺 Causes:</strong> {selectedArticle.details.causes}</p>
                  <p><strong>🤒 Symptoms:</strong> {selectedArticle.details.symptoms}</p>
                  <p><strong>🛡 Prevention:</strong> {selectedArticle.details.prevention}</p>
                  <p><strong>👨‍⚕️ When to see a doctor:</strong> {selectedArticle.details.doctor}</p>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                <i className="bi bi-x-circle me-1"></i> Close
              </button>
              <button className="btn btn-primary">
                <i className="bi bi-chat-dots me-1"></i> Ask a Doctor
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
