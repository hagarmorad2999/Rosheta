import React, { useState, useContext } from "react";
import { BookingContext } from "../../context/BookingContext";

export default function BookingModal({ doctor, close }) {
  const { bookDoctor } = useContext(BookingContext);
  const [slot, setSlot] = useState("");

  const confirm = () => {
    alert(`Payment Successful for ${slot}`);
    bookDoctor(doctor.name, slot);
    close();
  };

  return (
    <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content p-4">
          <h5>Select a time slot for {doctor.name}</h5>
          <select
            className="form-select my-3"
            onChange={(e) => setSlot(e.target.value)}
            value={slot}
          >
            <option value="">Select Slot</option>
            {doctor.slots.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <button
            className="btn btn-success me-2"
            onClick={confirm}
            disabled={!slot}
          >
            Pay {doctor.price} EGP
          </button>
          <button
  className="btn"
  onClick={close}
  style={{ backgroundColor: "#dc3545", color: "white" }} // أحمر Bootstrap أصلي
>
  Cancel
</button>
        </div>
      </div>
    </div>
  );
}
