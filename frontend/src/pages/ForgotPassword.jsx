import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { backendUrl, navigate } = useContext(ShopContext);

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}api/user/forgotPassword`, { email });
      if (response.data.success) {
        toast.success("OTP Send to your email");
        navigate('/verifyotp');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error sending reset link.");
    }
  };


  return (
    <form onSubmit={handleForgotPassword} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <h2 className="text-2xl font-semibold">Forgot Password?</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="w-full py-2 px-3 border border-gray-800" 
        placeholder="Enter your email" 
        required 
      />
      <button className="bg-black text-white font-light px-8 py-2 mt-4">Send Reset Link</button>
    </form>
  );
};

export default ForgotPassword;
