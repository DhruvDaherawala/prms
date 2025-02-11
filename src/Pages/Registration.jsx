import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import image from "../assets/Images/Registartion_page/Logo.png";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <img src={image}/>
        </div>
        <h2 className="text-center text-lg font-semibold text-gray-800">
          Welcome to
        </h2>
        <h1 className="text-center text-2xl font-bold text-gray-900">
          Tenant Management System
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Enter your information below to continue
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="relative w-1/2">
              <label className="block text-gray-700 text-sm">
                Create Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {/* {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} */}
              </button>
            </div>
            <div className="relative w-1/2">
              <label className="block text-gray-700 text-sm">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="********"
                className="w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                onClick={toggleConfirmPasswordVisibility}
              >
                {/* {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />} */}
              </button>
            </div>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
