import React, { useState, useContext } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { backendUrl, navigate } = useContext(ShopContext);
  const { token } = useParams(); // Get reset token from URL

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}api/user/reset-password`, { token, password });
      if (response.data.success) {
        toast.success("Password updated successfully.");
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error resetting password.");
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
      <button className="bg-black text-white font-light px-8 py-2 mt-4">Update Password</button>
    </form>
  );
};

export default ResetPassword;
