



import { useState, useContext } from "react";
import {DoctorsContext}  from "../../src/context/DoctorContext";
import { AuthContext } from "../context/AuthContext";
import avatar from "../../src/images/avatar.jpg";
export default function AdminDashboard() {

  const { doctors, setDoctors } = useContext(DoctorsContext);

  // ✅ الحل هنا
  const { users = [] } = useContext(AuthContext) || {};

  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [price, setPrice] = useState(300);
  const [slots, setSlots] = useState("10:00,11:00,12:00");

  const addDoctor = () => {
    if (!name || !specialty) {
      alert("Please enter name and specialty");
      return;
    }

const newDoctor = {
  id: Date.now(),
  name,
  specialty,
  rating: 0,
  reviews: 0,
  location: "Not specified",
  price: parseInt(price),
  image: avatar,          // 👈 مهم جدًا
  slots: slots.split(",").map(s => s.trim()),
};






    setDoctors([...doctors, newDoctor]);
    setName("");
    setSpecialty("");
    setPrice(300);
    setSlots("10:00,11:00,12:00");
  };

  const deleteDoctor = (id) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      setDoctors(doctors.filter(d => d.id !== id));
    }
  };

  return (
    <div className="container py-5">

      <h2 className="mb-4">Admin Dashboard</h2>

      {/* Add Doctor */}
      <div className="mb-5 p-3 shadow rounded">
        <h4>Add New Doctor</h4>

        <input
          placeholder="Doctor Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="form-control my-2"
        />

        <input
          placeholder="Specialty"
          value={specialty}
          onChange={e => setSpecialty(e.target.value)}
          className="form-control my-2"
        />

        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="form-control my-2"
        />

        <input
          placeholder="Slots (comma separated)"
          value={slots}
          onChange={e => setSlots(e.target.value)}
          className="form-control my-2"
        />

        <button className="btn btn-primary mt-2" onClick={addDoctor}>
          Add Doctor
        </button>
      </div>

      {/* Doctors List */}
      <div className="mb-5 p-3 shadow rounded">
        <h4>All Doctors</h4>

        {doctors.length === 0 ? (
          <p>No doctors available</p>
        ) : (
          <ul className="list-group">
            {doctors.map(d => (
              <li
                key={d.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {d.name} ({d.specialty})
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteDoctor(d.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Users List */}


    </div>
  );
}
