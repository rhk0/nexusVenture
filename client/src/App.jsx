import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router components
import ProtectedUser from "./components/auth/ProtectedUser.jsx"; // Import ProtectedUser
import ProtectedAdmin from "./components/auth/ProtectedAdmin.jsx"; // Import ProtectedAdmin
import { AuthProvider } from "./components/context/AuthContext.jsx";
import AdminDash from "./components/admin/AdminDash.jsx";
import User from "./components/user/UserDash.jsx";
import Product from "./components/admin/Product.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import SignIn from "./components/auth/SignIn.jsx";

import Footer from "./components/Landing/Footer";
import Header from "./components/Landing/Header";
import HeroSection from "./components/Landing/HeroSection";

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Wrap the app with AuthProvider */}
      <Router>
        {" "}
        {/* <HeroSection /> */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedAdmin>
                <AdminDash />
              </ProtectedAdmin>
            }
          />
          <Route
            path="/product"
            element={
              <ProtectedAdmin>
                <Product />
              </ProtectedAdmin>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
