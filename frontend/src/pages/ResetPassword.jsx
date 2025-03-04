import React, { useState, useContext } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { backendUrl, navigate } = useContext(ShopContext);

  const handleResetPassword = async (event) => {
    event.preventDefault();

    // Validate password and confirm password
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // Get the user's email from localStorage (set after OTP verification)
      const email = localStorage.getItem("email");

      if (!email) {
        toast.error("Email not found. Please request a new OTP.");
        navigate("/forgotpassword");
        return;
      }

      // Send request to reset password
      const response = await axios.post(`${backendUrl}api/user/resetpassword`, {
        email,
        password,
      });

      if (response.data.success) {
        toast.success("Password updated successfully.");
        localStorage.removeItem("email"); // Clear the email from localStorage
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error("Error resetting password. Please try again.");
    }
  };

  return (
    <form onSubmit={handleResetPassword} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <h2 className="text-2xl font-semibold">Reset Password</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full py-2 px-3 border border-gray-800"
        placeholder="Enter new password"
        required
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full py-2 px-3 border border-gray-800"
        placeholder="Confirm new password"
        required
      />
      <button type="submit" className="bg-black text-white font-light px-8 py-2 mt-4">
        Update Password
      </button>
    </form>
  );
};

export default ResetPassword;