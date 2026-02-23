// import React, { useContext } from "react";
// import {AuthContext}   from "../../src/context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Profile() {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <div className="container py-5" style={{ maxWidth: "900px" }}>
//       {/* ================= Header ================= */}
//       <div
//         className="d-flex align-items-center mb-4 p-3 rounded shadow-sm"
//         style={{ backgroundColor: "#0D6EFD", color: "white" }}
//       >
//         <div
//           className="rounded-circle d-flex align-items-center justify-content-center me-3"
//           style={{
//             width: "70px",
//             height: "70px",
//             backgroundColor: "white",
//             color: "#0D6EFD",
//             fontSize: "1.8rem",
//             fontWeight: "700",
//             cursor: "pointer",
//           }}
//           onClick={() => navigate("/profile")}
//         >
//           {user?.fullName?.charAt(0).toUpperCase() || "U"}
//         </div>
//         <div>
//           <h4 className="mb-1 fw-bold">{user?.fullName || "User Name"}</h4>
//           <p className="mb-0">{user?.email}</p>
//         </div>
//       </div>

//       {/* ================= Edit Profile Button ================= */}
//       <div className="mb-4 text-end">
//         <button
//           className="btn btn-outline-primary"
//           onClick={() => alert("Edit Profile")}
//         >
//           <i className="hcons-pencil me-2"></i> Edit Profile
//         </button>
//       </div>

//       {/* ================= My Bookings ================= */}
//       <div className="mb-4">
//         <h5 className="fw-bold mb-3">
//           <i className="hcons-calendar me-2"></i> My Bookings
//         </h5>
//         <div className="card shadow-sm p-3 mb-2">
//           <div className="d-flex justify-content-between">
//             <div>
//               <strong>Dr. John Doe</strong> - Cardiology
//               <p className="mb-0 text-muted">12 Feb 2026 | 10:00 AM</p>
//             </div>
//             <button className="btn btn-sm btn-outline-danger">
//               Cancel
//             </button>
//           </div>
//         </div>
//         <div className="card shadow-sm p-3 mb-2">
//           <div className="d-flex justify-content-between">
//             <div>
//               <strong>Dr. Sarah Lee</strong> - Dermatology
//               <p className="mb-0 text-muted">15 Feb 2026 | 02:00 PM</p>
//             </div>
//             <button className="btn btn-sm btn-outline-danger">
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>

      // {/* ================= Messages / Ask Doctor ================= */}
      // <div className="mb-4">
      //   <h5 className="fw-bold mb-3">
      //     <i className="hcons-chat me-2"></i> Messages / Ask Doctor
      //   </h5>
      //   <div className="card shadow-sm p-3 mb-2">
      //     <strong>Dr. John Doe:</strong>
      //     <p className="mb-0 text-muted">Please bring your previous reports.</p>
      //   </div>
      //   <div className="card shadow-sm p-3 mb-2">
      //     <strong>Dr. Sarah Lee:</strong>
      //     <p className="mb-0 text-muted">Schedule a follow-up next week.</p>
      //   </div>
      // </div>

      // {/* ================= Notifications ================= */}
      // <div className="mb-4">
      //   <h5 className="fw-bold mb-3">
      //     <i className="hcons-bell me-2"></i> Notifications
      //   </h5>
      //   <div className="alert alert-info shadow-sm" role="alert">
      //     Upcoming appointment with Dr. John Doe on 12 Feb 2026
      //   </div>
      //   <div className="alert alert-info shadow-sm" role="alert">
      //     New message from Dr. Sarah Lee
      //   </div>
      // </div>

      // {/* ================= Payment / Invoices ================= */}
      // <div className="mb-4">
      //   <h5 className="fw-bold mb-3">
      //     <i className="hcons-credit-card me-2"></i> Payment / Invoices
      //   </h5>
      //   <div className="card shadow-sm p-3 mb-2 d-flex justify-content-between align-items-center">
      //     <div>
      //       <strong>Invoice #1234</strong>
      //       <p className="mb-0 text-muted">Paid on 10 Feb 2026</p>
      //     </div>
      //     <button className="btn btn-sm btn-outline-primary">Download</button>
      //   </div>
      //   <div className="card shadow-sm p-3 mb-2 d-flex justify-content-between align-items-center">
      //     <div>
      //       <strong>Invoice #1235</strong>
      //       <p className="mb-0 text-muted">Paid on 15 Feb 2026</p>
      //     </div>
      //     <button className="btn btn-sm btn-outline-primary">Download</button>
      //   </div>
      // </div>

//       {/* ================= Logout Button ================= */}
//       <div className="text-center mt-4">
//         <button className="btn btn-danger px-4" onClick={handleLogout}>
//           <i className="hcons-logout me-2"></i> Logout
//         </button>
//       </div>
//     </div>
//   );
// }



import React, { useContext } from "react";
import { AuthContext } from "../../src/context/AuthContext";
import { BookingContext } from "../../src/context/BookingContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  const { bookings, cancelBooking } = useContext(BookingContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // ✅ نعرض بس حجوزات المستخدم الحالي
  const myBookings = bookings.filter(
    (b) => b.userEmail === user?.email
  );

  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>
      {/* ================= Header ================= */}
      <div
        className="d-flex align-items-center mb-4 p-3 rounded shadow-sm"
        style={{ backgroundColor: "#0D6EFD", color: "white" }}
      >
        <div
          className="rounded-circle d-flex align-items-center justify-content-center me-3"
          style={{
            width: "70px",
            height: "70px",
            backgroundColor: "white",
            color: "#0D6EFD",
            fontSize: "1.8rem",
            fontWeight: "700",
          }}
        >
          {user?.fullName?.charAt(0).toUpperCase() || "U"}
        </div>
        <div>
          <h4 className="mb-1 fw-bold">{user?.fullName || "User Name"}</h4>
          <p className="mb-0">{user?.email}</p>
        </div>
      </div>

      {/* ================= Edit Profile ================= */}
      <div className="mb-4 text-end">
        <button className="btn btn-outline-primary">
          Edit Profile
        </button>
      </div>

      {/* ================= My Bookings (REAL DATA) ================= */}
      <div className="mb-4">
        <h5 className="fw-bold mb-3">
          <i className="hcons-calendar me-2"></i> My Bookings
        </h5>

        {myBookings.length === 0 ? (
          <div className="alert alert-secondary text-center">
            No bookings yet
          </div>
        ) : (
          myBookings.map((b) => (
            <div key={b.id} className="card shadow-sm p-3 mb-3">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="fw-bold mb-2 text-primary"> {b.doctor.name} – {b.doctor.specialty}
                  </h6>

                  <p className="mb-1">
                    👤 <strong>Patient:</strong> {b.patient.name}
                  </p>

                  <p className="mb-1">
                    📞 <strong>Phone:</strong> {b.patient.phone}
                  </p>

                  <p className="mb-1">
                    📅 <strong>Appointment:</strong> {b.slot}
                  </p>

                  <p className="fw-bold text-success mb-0">
                    💰 {b.doctor.price} EGP
                  </p>
                </div>

                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => cancelBooking(b.id)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ))
        )}
      </div>



      {/* ================= Messages / Ask Doctor ================= */}
      <div className="mb-4">
        <h5 className="fw-bold mb-3">
          <i className="hcons-chat me-2"></i> Messages / Ask Doctor
        </h5>
        <div className="card shadow-sm p-3 mb-2">
          <strong>Dr. John Doe:</strong>
          <p className="mb-0 text-muted">Please bring your previous reports.</p>
        </div>
        <div className="card shadow-sm p-3 mb-2">
          <strong>Dr. Sarah Lee:</strong>
          <p className="mb-0 text-muted">Schedule a follow-up next week.</p>
        </div>
      </div>

      {/* ================= Notifications ================= */}
      <div className="mb-4">
        <h5 className="fw-bold mb-3">
          <i className="hcons-bell me-2"></i> Notifications
        </h5>
        <div className="alert alert-info shadow-sm" role="alert">
          Upcoming appointment with Dr. John Doe on 12 Feb 2026
        </div>
        <div className="alert alert-info shadow-sm" role="alert">
          New message from Dr. Sarah Lee
        </div>
      </div>

      {/* ================= Payment / Invoices ================= */}
      <div className="mb-4">
        <h5 className="fw-bold mb-3">
          <i className="hcons-credit-card me-2"></i> Payment / Invoices
        </h5>
        <div className="card shadow-sm p-3 mb-2 d-flex justify-content-between align-items-center">
          <div>
            <strong>Invoice #1234</strong>
            <p className="mb-0 text-muted">Paid on 10 Feb 2026</p>
          </div>
          <button className="btn btn-sm btn-outline-primary">Download</button>
        </div>
        <div className="card shadow-sm p-3 mb-2 d-flex justify-content-between align-items-center">
          <div>
            <strong>Invoice #1235</strong>
            <p className="mb-0 text-muted">Paid on 15 Feb 2026</p>
          </div>
          <button className="btn btn-sm btn-outline-primary">Download</button>
        </div>
      </div>
















      {/* ================= Logout ================= */}
      <div className="text-center mt-4">
        <button className="btn btn-danger px-4" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}








