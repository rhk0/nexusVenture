import { useState } from "react";
import axios from "axios"; // Importing axios
import man from "../../assets/man.jpg";
import { useAuth } from "../context/AuthContext"; // Assuming you're using context for authentication
import Footer from "../Landing/Footer";
import Header from "../Landing/Header";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const togglePasswordVisibility1 = () => {
    setShowPassword1((prev) => !prev);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {
    try {
      const { data } = await axios.post("/api/v1/auth/login", formData);
      alert(data.message);

      // Store the token in sessionStorage and update the context
      sessionStorage.setItem("authToken", data.token);
      sessionStorage.setItem("role", data.role); // Store the role in sessionStorage

      // Use the login function from the context
      login(data.token, data.role);

      // Conditional navigation based on role
      if (data.role === "Admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-5xl flex bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Image Section */}
          <div className="w-1/2">
            <img
              src={man}
              alt="Signup"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="w-1/2 bg-[#043B64] text-white p-8">
            <h2 className="text-[38px] font-semibold mb-2 text-center">
              Login
            </h2>
            <p className="text-[11.99px] text-[#FFFFF]-400 mb-10 text-center">
              Fill in your credentials and click on the the Login button
            </p>

            <form>
              {/* User Name */}
              <div className="mb-4">
                <label className="block text-[#FFFFF]-300 mb-1">
                  Email Address
                </label>
                <div className="flex items-center bg-white rounded-md relative">
                  <input
                    name="email"
                    type="text"
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full px-4 py-2 focus:outline-none text-black rounded-md pr-10"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute right-3" // This positions the icon to the right
                  >
                    <path
                      d="M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7"
                      stroke="#04009a"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9M2 16.5h6M2 12.5h3"
                      stroke="#04009a"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className=" mb-4">
                <label className="block text-[#FFFFF]-300 mb-1">Password</label>
                <div className="flex items-center bg-white rounded-md relative">
                  <input
                    type={showPassword1 ? "text" : "password"}
                    className="w-full px-4 py-2 focus:outline-none text-black rounded-md pr-10"
                  />
                  <div
                    name="password"
                    className="absolute right-3 cursor-pointer"
                    onChange={handleChange}
                    value={formData.password}
                    onClick={togglePasswordVisibility1}
                  >
                    {showPassword1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"
                          stroke="#04009a"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"
                          stroke="#04009a"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="m14.53 9.47-5.06 5.06a3.576 3.576 0 1 1 5.06-5.06Z"
                          stroke="#04009a"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17M8.42 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47"
                          stroke="#04009a"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M15.51 12.7a3.565 3.565 0 0 1-2.82 2.82M9.47 14.53 2 22M22 2l-7.47 7.47"
                          stroke="#04009a"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-right mb-4">
                <a href="#" className="text-[#FFFFF] text-sm hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleLogin}
                  className="w-1/2 bg-[#FFFFFF] border border-white py-2 rounded-md text-black hover:bg-[#5a6268] transition"
                >
                  Login
                </button>
              </div>
              <div className="text-left mt-4">
                <p className="text-sm">
                  Don't have an account?{" "}
                  <a href="#" className="text-[#1E90FF] hover:underline">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
