import React, { useState } from "react";

export default function AddQuestion() {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Question submitted successfully");
    setQuestion("");
  };

  return (
    <div className="container mt-5">
      <h2>Add Medical Question</h2>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Your Question</label>
          <textarea
            className="form-control"
            rows="4"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
