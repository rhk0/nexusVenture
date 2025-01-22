
// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Auth from './components/Auth.jsx';

// import ProtectedUser from './components/auth/ProtectedUser.jsx';  // Import ProtectedUser
// import ProtectedAdmin from './components/auth/ProtectedAdmin.jsx'; // Import ProtectedAdmin
// import { AuthProvider } from './components/context/AuthContext.jsx';
// import AdminDash from './components/admin/AdminDash.jsx';
// import User from './components/user/UserDash.jsx';
// import Product from './components/admin/Product.jsx';
// import Landing from './components/Landing/Landing.js';

// function App() {
//   return (
//     <AuthProvider> 
//       <Router>
//         <Routes>
//           <Route path='/' element={<Landing/>}/>
//           {/* <Route path="/" element={<Auth />} />
//           <Route
//             path="/user-dashboard"
//             element={
//               <ProtectedUser>
//                 <User />
//               </ProtectedUser>
//             }
//           />
//           <Route
//             path="/admin-dashboard"
//             element={
//               <ProtectedAdmin>
//                 <AdminDash /> 
//               </ProtectedAdmin>
//             }
//           />
//           <Route
//             path="/product"
//             element={
//               <ProtectedAdmin>
//                 <Product /> 
//               </ProtectedAdmin>
//             }
//           /> */}
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
// import React from "react";
// import Footer from "./components/Footer";
// import HeroSection from "./components/HeroSection";
import Footer from "./components/Landing/Footer";
import Header from "./components/Landing/Header";
import HeroSection from "./components/Landing/HeroSection";

function App() {
  return (
    <div className="w-full">
      <Header/>
       <HeroSection />
      <Footer />
    </div>
  );
}

export default App;