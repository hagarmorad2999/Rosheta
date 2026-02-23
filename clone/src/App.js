
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext.jsx';
// import { BookingProvider } from './context/BookingContext.jsx';
// import ProtectedRoute from './component/UI/ProtectedRoute.jsx';
// import Layout from './component/Layout/Layout.jsx';
// import Home from './pages/Home.jsx';
// import Login from './component/Auth/Login.jsx';
// import Register from './component/Auth/Register.jsx';
// import DoctorDetails from './pages/DoctorDetails.jsx';
// import MyBookings from './pages/MyBookings.jsx';
// import AdminDashboard from './pages/AdminDashboard.jsx';
// import NotFound from './pages/NotFound.jsx';
// import Questions from './pages/Questions.jsx';
// import About from './pages/About.jsx';
// import MedicalInfo from './pages/MedicalInfo.jsx';
// import BookingPage from './pages/BookingPage.jsx';
// import Profile from './pages/Profile.jsx'; // ✅ صفحة البروفايل

// function App() {
//   const routers = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout />, // Layout should include Navbar and Footer
//       children: [
//         { index: true, element: <Home /> },
//         { path: 'login', element: <Login /> },
//         { path: 'register', element: <Register /> },
//         { path: 'doctor/:id', element: <DoctorDetails /> },
//         { path: 'questions', element: <Questions /> },
//         { path: 'about', element: <About /> },
//         { path: 'medicalinfo', element: <MedicalInfo /> },
//         { path: 'booking/:id', element: <BookingPage /> },
//         { path: 'bookings', element: <ProtectedRoute><MyBookings /></ProtectedRoute> },
//         { path: 'admin', element: <ProtectedRoute admin><AdminDashboard /></ProtectedRoute> },
//         { path: 'profile', element: <ProtectedRoute><Profile /></ProtectedRoute> },
        
//          { path: 'questions', element: <Questions /> },
//       { path: 'about', element: <About /> },
//       { path: 'medicalinfo', element: <MedicalInfo /> },
//         // ✅ Route للـ Profile
//         { path: '*', element: <NotFound /> }
//       ]
//     }
//   ]);

//   return (
//     <AuthProvider>
//       <BookingProvider>
//         <RouterProvider router={routers} />
//       </BookingProvider>
//     </AuthProvider>
//   );
// }

// export default App;







// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext.jsx';
// import { BookingProvider } from './context/BookingContext.jsx';

// import ProtectedRoute from './component/UI/ProtectedRoute.jsx';
// import Layout from './component/Layout/Layout.jsx';

// import Home from './pages/Home.jsx';
// import Login from './component/Auth/Login.jsx';
// import Register from './component/Auth/Register.jsx';
// import DoctorDetails from './pages/DoctorDetails.jsx';
// import BookingPage from './pages/BookingPage.jsx';
// import MyBookings from './pages/MyBookings.jsx';
// import Profile from './pages/Profile.jsx';
// import AdminDashboard from './pages/AdminDashboard.jsx';

// import Questions from './pages/Questions.jsx';
// import About from './pages/About.jsx';
// import MedicalInfo from './pages/MedicalInfo.jsx';
// import NotFound from './pages/NotFound.jsx';

// function App() {
//   const routers = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         { index: true, element: <Home /> },
//         { path: 'login', element: <Login /> },
//         { path: 'register', element: <Register /> },

//         { path: 'doctor/:id', element: <DoctorDetails /> },
//         { path: 'booking/:id', element: <BookingPage /> },

//         {
//           path: 'bookings',
//           element: (
//             <ProtectedRoute>
//               <MyBookings />
//             </ProtectedRoute>
//           ),
//         },

//         {
//           path: 'profile',
//           element: (
//             <ProtectedRoute>
//               <Profile />
//             </ProtectedRoute>
//           ),
//         },

//         {
//           path: 'admin',
//           element: (
//             <ProtectedRoute admin>
//               <AdminDashboard />
//             </ProtectedRoute>
//           ),
//         },

//         { path: 'questions', element: <Questions /> },
//         { path: 'about', element: <About /> },
//         { path: 'medicalinfo', element: <MedicalInfo /> },

//         { path: '*', element: <NotFound /> },
//       ],
//     },
//   ]);

//   return (
//     <AuthProvider>
//       <BookingProvider>
//         <RouterProvider router={routers} />
//       </BookingProvider>
//     </AuthProvider>
//   );
// }

// export default App;



import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { BookingProvider } from './context/BookingContext.jsx';
import { DoctorsProvider }from './context/DoctorContext.jsx'; // ✅ اضافه ال DoctorProvider

import ProtectedRoute from './component/UI/ProtectedRoute.jsx';
import Layout from './component/Layout/Layout.jsx';

import Home from './pages/Home.jsx';
import Login from './component/Auth/Login.jsx';
import Register from './component/Auth/Register.jsx';
import DoctorDetails from './pages/DoctorDetails.jsx';
import BookingPage from './pages/BookingPage.jsx';
import MyBookings from './pages/MyBookings.jsx';
import Profile from './pages/Profile.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

import Questions from './pages/Questions.jsx';
import About from './pages/About.jsx';
import MedicalInfo from './pages/MedicalInfo.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'doctor/:id', element: <DoctorDetails /> },
        { path: 'booking/:id', element: <BookingPage /> },
        {
          path: 'bookings',
          element: (
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          ),
        },
        {
          path: 'profile',
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: 'admin',
          element: (
            <ProtectedRoute admin>
              <AdminDashboard />
            </ProtectedRoute>
          ),
        },
        { path: 'questions', element: <Questions /> },
        { path: 'about', element: <About /> },
        { path: 'medicalinfo', element: <MedicalInfo /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return (
    <DoctorsProvider> {/* ✅ غلفنا كل التطبيق بال DoctorProvider */}
      <AuthProvider>
        <BookingProvider>
          <RouterProvider router={routers} />
        </BookingProvider>
      </AuthProvider>
    </DoctorsProvider>
  );
}

export default App;
