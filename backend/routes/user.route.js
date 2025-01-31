import express from 'express'
import { clerkWebhooks, userCredits } from '../controllers/user.controller.js'
import { authUser } from '../middlewares/auth.js';

const userRouter = express.Router();

// userRouter.post('/webhooks', clerkWebhooks);
userRouter.use("/webhooks", (req, res, next) => {
    console.log("Incoming Webhook:", req.method, req.headers, req.body);
    next();
    
  });
  
userRouter.get('/credits', authUser, userCredits)

userRouter.get("/test-get", (req, res) => {
    res.json({ message: "GET /test-get works!" });
  });

export default userRouter;