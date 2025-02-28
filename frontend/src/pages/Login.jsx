import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";


const Login = () => {
  const [currentState, setCurrentState] = useState("Signup");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let response;
      if (currentState === "Signup") {
        response = await axios.post(`${backendUrl}api/user/register`, {
          name,
          email,
          password,
        });
      } else {
        response = await axios.post(`${backendUrl}api/user/login`, {
          email,
          password,
        });
      }
  
      if (response.data.success) {
        const token = response.data.data.token; // Corrected this line
        setToken(token);
        localStorage.setItem("token", token);
        toast.success("Successfully logged in!");
        toast.success("Read all the Privacy Policy Details First");
        toast.success("Check our Collection Page for Products and Search Feature");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };
  

  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token])

  useEffect(()=>{
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  },[])

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800"></hr>
      </div>
      {currentState === "Login" ? '' : <input onChange={(e)=> setName(e.target.value)} value={name} className="w-full py-2 px-3 border border-gray-800" placeholder="Name" type="text" required/>}
      <input onChange={(e)=> setEmail(e.target.value)} value={email} className="w-full py-2 px-3 border border-gray-800" placeholder="Email" type="email" required/>
      <input onChange={(e)=> setPassword(e.target.value)} value={password} className="w-full py-2 px-3 border border-gray-800" placeholder="Password" type="password" required/>

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        {
          <p onClick={() =>navigate("/forgotpassword")} className="cursor-pointer">Forgot password</p>
          //onClick={() => (token ? null : navigate("/login"))}
        }
        {
          currentState === "Login"
          ? <p onClick={() =>setCurrentState('Signup')} className="cursor-pointer">Create Account</p>
          : <p onClick={() =>setCurrentState("Login")} className="cursor-pointer">Login Here</p>
        }
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentState === "Login" ? "Signin" : "Signup"}</button>
    </form>
  );
};

export default Login;
