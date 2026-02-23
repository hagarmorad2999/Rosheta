import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const handleRegister = () => {
    if (!fullName || !email || !password || !phone || !gender) {
      alert("Please fill all fields");
      return;
    }

    register({
      fullName,
      email,
      password,
      phone,
      gender,
    });

    navigate("/login"); // بعد التسجيل يروح لصفحة الدخول
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "60px auto",
        padding: "30px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: "12px",
        backgroundColor: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontFamily: "'Merriweather', serif",
          color: "#0D6EFD",
        }}
      >
        Create Your Account
      </h2>

      {/* Full Name */}
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        style={inputStyle}
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />

      {/* Phone */}
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={inputStyle}
      />

      {/* Gender */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "15px" }}>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female
        </label>
      </div>

      <button
        type="button"
        onClick={handleRegister}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#0D6EFD",
          color: "white",
          fontWeight: "600",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Register
      </button>

      <p style={{ textAlign: "center", marginTop: "15px", color: "#6c757d" }}>
        Already have an account?{" "}
        <span
          style={{ color: "#0D6EFD", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 15px",
  borderRadius: "8px",
  border: "1px solid #ced4da",
  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)",
  fontSize: "1rem",
  marginBottom: "15px",
};
