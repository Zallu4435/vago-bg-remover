import express from 'express'
import { clerkWebhooks, userCredits } from '../controllers/user.controller.js'
import { authUser } from '../middlewares/auth.js';

const userRouter = express.Router();

// userRouter.post('/webhooks', clerkWebhooks);
userRouter.use("/webhooks", clerkWebhooks);

  userRouter.post("/webhooks", (req, res) => {
    // Your webhook logic here
    res.json({ success: true });
  });

  userRouter.post("/webhooks", (req, res) => {
    console.log("Webhook data received:", req.body);
    res.json({ success: true });
  });
  
  
userRouter.get('/credits', authUser, userCredits)



export default userRouter;