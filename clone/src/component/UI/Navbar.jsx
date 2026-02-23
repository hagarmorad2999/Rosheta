

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { user, logout, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // دالة تأخذ أول حرف من الاسم أو الإيميل أو U كحرف افتراضي
  const getFirstLetter = () => {
    if (!user) return "U";
    return (
      (user.fullName && user.fullName.charAt(0).toUpperCase()) ||
      (user.email && user.email.charAt(0).toUpperCase()) ||
      "U"
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
 <Link
  to="/"
  style={{
    textDecoration: "none",
    color: "#ffffff",
    fontWeight: "700",
    fontSize: "1.6rem",
    letterSpacing: "2px",
    fontFamily: "'Merriweather', serif"
  }}
>
  Rosheta
</Link>

{/* زرار الموبايل */}
<button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navMenu"
  aria-controls="navMenu"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/medicalinfo">Medical Info</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>

            {/* ================= Admin Link (بس يظهر للـ Admin) ================= */}
            {isAdmin && (
              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-warning fw-bold"
                  to="/admin"
                  title="Admin Panel"
                >
               <FontAwesomeIcon
  icon={faBars}
  className="me-1"
  style={{ fontSize: "1.2rem", color: "#ffffff" }}
/>



                </Link>
              </li>
            )}

            {user ? (
              <>
                {/* 👈 أول حرف المستخدم يظهر للمستخدم العادي فقط */}
                { !isAdmin && (
                  <li className="nav-item mx-3">
                    <Link
                      to="/profile"
                      title="Profile"
                      style={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        color: "#0d6efd",
                        fontWeight: "bold",
                        textDecoration: "none",
                        fontSize: "1.1rem",
                        cursor: "pointer",
                        boxShadow: "0 0 5px rgba(0,0,0,0.2)"
                      }}
                    >
                      {getFirstLetter()}
                    </Link>
                  </li>
                )}

                <li className="nav-item">
                  <button
                    className="btn btn-outline-light d-flex align-items-center m-2"
                    onClick={handleLogout}
                  >
                    <span className="me-2">
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </span>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mx-2">
                  <Link className="btn btn-light text-primary m-1 " to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-light m-1 " to="/register">Register</Link>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}
