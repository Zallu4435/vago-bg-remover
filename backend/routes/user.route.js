import express from 'express';
import { clerkWebhooks, userCredits } from '../controllers/user.controller.js';
import { authUser } from '../middlewares/auth.js';
import bodyParser from 'body-parser';

const userRouter = express.Router();

// Parse the raw body for signature verification (important for webhooks)
userRouter.use("/webhooks", bodyParser.raw({ type: "application/json" }));

// Handle Clerk webhook events
userRouter.post("/webhooks", async (req, res) => {
  try {
    console.log("Webhook received");
    await clerkWebhooks(req, res);  // Call the webhook controller
    res.status(200).send('Webhook processed');
  } catch (error) {
    console.error("Error in webhook handling:", error);
    res.status(400).send('Invalid webhook');
  }
});

// User credits route
userRouter.get('/credits', authUser, userCredits);

export default userRouter;
