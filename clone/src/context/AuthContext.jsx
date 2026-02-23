



import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // قراءة المستخدم من localStorage عند تحميل الصفحة
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // =====================
  // REGISTER
  // =====================
  const register = (userData) => {
    /*
      userData = {
        fullName,
        email,
        password,
        phone,
        gender
      }
    */
    localStorage.setItem("registeredUser", JSON.stringify(userData));
    alert("Registration Successful ✅");
  };

  // =====================
  // LOGIN
  // =====================
  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    // Admin ثابت
    if (email === "admin@rosheta.com" && password === "123") {
      const adminUser = { email, role: "admin" };
      setUser(adminUser);
      localStorage.setItem("user", JSON.stringify(adminUser));
      return adminUser;
    }

    // User عادي
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      const loggedUser = { ...storedUser, role: "user" };
      setUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));
      return loggedUser;
    }

    alert("Invalid email or password ❌");
    return null;
  };

  // =====================
  // LOGOUT
  // =====================
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // =====================
  // 🆕 تحقق إذا المستخدم Admin
  // =====================
  const isAdmin = user?.role === "admin"; // ✅ هتسهل علينا نعرض عناصر Admin في Navbar و Dashboard

  // =====================
  // 🆕 دالة لإرجاع كل المستخدمين المسجلين
  // =====================
  const getRegisteredUsers = () => {
    const storedUser = localStorage.getItem("registeredUser");
    if (!storedUser) return [];
    // لو المستخدم الوحيد اللي متخزن
    return [JSON.parse(storedUser)];
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      isAdmin,
      getRegisteredUsers, // ✅ عشان الـ Admin Dashboard يقدر يعرض المستخدمين
    }}>
      {children}
    </AuthContext.Provider>
  );
}

