import express from "express";
import { clerkWebhooks, userCredits, updateCredits, getUserTransactions } from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.use("/webhooks", clerkWebhooks);

userRouter.get("/credits", authUser, userCredits);

userRouter.post('/update-credits', authUser, updateCredits);

userRouter.get('/user-transactions',authUser, getUserTransactions);
    
  
export default userRouter;
