

import { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

export function BookingProvider({ children }) {

  // ===============================
  // 🆕 تحميل الحجوزات من localStorage
  // ===============================
  const [bookings, setBookings] = useState(() => {
    const stored = localStorage.getItem("bookings");
    return stored ? JSON.parse(stored) : [];
  });

  // ===============================
  // 🆕 حفظ أي تعديل في الحجوزات
  // ===============================
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  // ===============================
  // ✅ الكود الأصلي (لم يتم لمسه)
  // ===============================
  const bookDoctor = (doctor, slot) => {
    setBookings(prev => [
      ...prev,
      { id: Date.now(), doctor, slot }
    ]);
  };

  // ===============================
  // 🆕 إضافة حجز كامل (الحجز الحقيقي)
  // ===============================
  const addBooking = ({
    doctor,
    slot,
    patient,
    userEmail
  }) => {
    const newBooking = {
      id: Date.now(),
      doctor,      // { name, specialty, price }
      slot,        // string
      patient,     // { name, email, phone }
      userEmail,   // ربط الحجز بالمستخدم
      createdAt: new Date().toISOString()
    };

    setBookings(prev => [...prev, newBooking]);
  };

  // ===============================
  // 🆕 إلغاء حجز واحد فقط
  // ===============================
  const cancelBooking = (bookingId) => {
    setBookings(prev =>
      prev.filter(b => b.id !== bookingId)
    );
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        bookDoctor,   // ✅ القديم
        addBooking,   // 🆕 الجديد
        cancelBooking // 🆕 الجديد
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}




