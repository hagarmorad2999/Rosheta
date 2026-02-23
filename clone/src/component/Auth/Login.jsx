


import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, setUser } = useContext(AuthContext); // ✅ ضيفنا setUser هنا
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // استدعاء login من الـ context
    const userData = login(email, password); // بدل true/false دلوقتي هترجع بيانات المستخدم

    if (!userData) {
      alert("Invalid email or password");
      return;
    }

    // ✅ حفظ بيانات المستخدم في localStorage
    localStorage.setItem("user", JSON.stringify(userData));

    // ✅ تحديث الـ context مباشرة لتجنب أي مشاكل بعد reload
    if (setUser) setUser(userData);

    // إعادة التوجيه للصفحة الرئيسية بعد تسجيل الدخول
    navigate("/");
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
        Login to Your Account
      </h2>

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

      <button
        type="button"
        onClick={handleLogin}
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
        Login
      </button>

      <p style={{ textAlign: "center", marginTop: "15px", color: "#6c757d" }}>
        Don’t have an account?{" "}
        <span
          style={{ color: "#0D6EFD", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Register
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









