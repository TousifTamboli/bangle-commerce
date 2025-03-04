import React, { useState, useContext } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const { backendUrl, navigate } = useContext(ShopContext);

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}api/user/verify-otp`, { email, otp });
      if (response.data.success) {
        toast.success("OTP verified successfully");
        navigate("/resetpassword");
      } else {
        toast.error(response.data.message || "OTP verification failed");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleVerifyOtp} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <h2 className="text-2xl font-semibold">Enter Email and OTP</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full py-2 px-3 border border-gray-800"
        placeholder="Enter Email ID"
        required
      />
      <input
        type="text" // Use type="text" for OTP input
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full py-2 px-3 border border-gray-800"
        placeholder="Enter OTP"
        required
      />
      <button type="submit" className="bg-black text-white font-light px-8 py-2 mt-4">
        Verify
      </button>
    </form>
  );
};

export default VerifyOtp;