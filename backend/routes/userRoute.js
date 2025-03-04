import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  sendOTP,
  verifyOtp,
  resetPassword,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.post("/forgotPassword", sendOTP);
userRouter.post("/verify-otp", verifyOtp);
userRouter.post("/resetpassword", resetPassword);



export default userRouter;
