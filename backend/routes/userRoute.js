import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  sendOTP,
  verifyOTP
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.post("/forgot-password", sendOTP);
userRouter.post("/reset-password", verifyOTP);



export default userRouter;
