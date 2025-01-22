import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios"; // Importing axios
import corporateImage from "../../assets/corporates.jpg";
import { useNavigate } from 'react-router-dom';


const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const togglePasswordVisibility1 = () => {
    setShowPassword1((prev) => !prev);
  };


  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');  // Replace '/login' with the actual login page path
  };


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNo: "",
    whatsappNo: "",
    email: "",
    state: "",
    referralCode: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    try {
      const { data } = await axios.post("/api/v1/auth/signup", formData);
      toast.success(data.message);
      console.log(data,"djfk")
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Image Section */}
        <div className="w-1/2">
          <img
            src={corporateImage}
            alt="Signup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-1/2 bg-[#043B64] text-white p-8">
          <h2 className="text-[38px] font-semibold mb-2 text-center">
            Sign up
          </h2>
          <p className="text-[11.99px] text-[#FFFFF]-400 mb-6 text-center">
            Fill in your credentials and click on the Sign-up button
          </p>

          <form>
            {/* First Name and Last Name */}
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label className="block text-[#FFFFF]-300 mb-1">
                  First Name
                </label>
                <div className="flex items-center bg-white rounded-md relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 focus:outline-none text-black rounded-md pr-10"
                  />
                  <CiUser className="absolute right-3 text-[#04009A] text-xl" />
                </div>
              </div>
              <div className="w-1/2">
                <label className="block text-[#FFFFF]-300 mb-1">
                  Last Name
                </label>
                <div className="flex items-center bg-white rounded-md relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 focus:outline-none text-black rounded-md pr-10"
                  />
                  <CiUser className="absolute right-3 text-[#04009A] text-xl" />
                </div>
              </div>
            </div>

            {/* Contact No */}
            <div className="mb-4">
              <label className="block text-[#FFFFF]-300 mb-1">Contact No</label>
              <div className="flex items-center bg-white rounded-md relative">
                <input
                  type="text"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 focus:outline-none text-black rounded-md pr-10"
                />
                <IoCallOutline className="absolute right-3 text-[#043B64] text-xl" />
              </div>
            </div>

            {/* WhatsApp No */}
            <div className="mb-4">
              <label className="block text-[#FFFFF]-300 mb-1">
                WhatsApp No
              </label>
              <div className="flex items-center bg-white rounded-md relative">
                <input
                  type="text"
                  name="whatsappNo"
                  value={formData.whatsappNo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 focus:outline-none text-black rounded-md pr-10"
                />
                <FaWhatsapp className="absolute right-3 text-[#043B64] text-xl" />
              </div>
            </div>

            {/* User Name */}
            <div className="mb-4">
              <label className="block text-[#FFFFF]-300 mb-1">
                Email Address
              </label>
              <div className="flex items-center bg-white rounded-md relative">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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

            {/* State */}
            <div className="mb-4">
              <label className="block text-[#FFFFF]-300 mb-1">State</label>
              <div className="flex items-center bg-white rounded-md relative">
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
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
                </svg>{" "}
              </div>
            </div>

            {/* Referral Code */}
            <div className="mb-4">
              <label className="block text-[#FFFFF]-300 mb-1">
                Referral Code
              </label>
              <div className="flex items-center bg-white rounded-md relative">
                <input
                  type="text"
                  name="referralCode"
                  value={formData.referralCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 focus:outline-none text-black rounded-md pr-10"
                />
              </div>
            </div>

            {/* Password and Confirm Password */}
            <div className=" mb-4">
              <label className="block text-[#FFFFF]-300 mb-1">Password</label>
              <div className="flex items-center bg-white rounded-md relative">
                <input
                  type={showPassword1 ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 focus:outline-none text-black rounded-md pr-10"
                />
                <div
                  className="absolute right-3 cursor-pointer"
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
              <div className="mb-4">
                <label className="block text-[#FFFFF]-300 mb-1">
                  Confirm Password
                </label>
                <div className="flex items-center bg-white rounded-md relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 focus:outline-none text-black rounded-md pr-10"
                  />
                  <div
                    className="absolute right-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
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
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center mb-6">
              <input type="checkbox" className="w-4 h-4 mr-2 accent-blue-500" />
              <label className="text-sm text-[#FFFFF]-400">
                I agree to the{" "}
                <span className="text-blue-400 underline">
                  Terms and Conditions
                </span>{" "}
                and{" "}
                <span className="text-blue-400 underline">Privacy Policy</span>.
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                onClick={handleSignup}
                className="w-1/2 bg-[#000000] border border-white py-2 rounded-md text-white hover:bg-[#0056b3] transition"
              >
                Register
              </button>
              <button
                type="button"
                onClick={handleLoginClick}

                className="w-1/2 bg-[#043B64] border border-white py-2 rounded-md text-white hover:bg-[#5a6268] transition"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
