import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light text-dark mt-5 border-top">
      <div className="container py-5">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-primary">Rosheta</h4>
            <p className="text-muted">
              Book doctor appointments, ask medical questions, and access trusted
              medical information easily.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-muted">Home</a></li>
              <li><a href="/about" className="text-decoration-none text-muted">About</a></li>
              <li><a href="/questions" className="text-decoration-none text-muted">Questions</a></li>
              <li><a href="/medical-info" className="text-decoration-none text-muted">Medical Info</a></li>
            </ul>
          </div>

          {/* For Users */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">For Users</h6>
            <ul className="list-unstyled">
              <li><span className="text-muted">Search Doctors</span></li>
              <li><span className="text-muted">Book Appointments</span></li>
              <li><span className="text-muted">Ask Doctors</span></li>
              <li><span className="text-muted">Manage Bookings</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Contact</h6>
            <p className="text-muted mb-1">📧 support@rosheta.com</p>
            <p className="text-muted mb-1">📞 +20 100 000 0000</p>
            <p className="text-muted">📍 Egypt</p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary text-white text-center py-3">
        <small>
          © {new Date().getFullYear()} Rosheta. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
}
