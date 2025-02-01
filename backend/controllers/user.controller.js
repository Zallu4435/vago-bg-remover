import { Webhook } from "svix";
import User from "../models/user.model.js";

export const clerkWebhooks = async (req, res) => {
  try {
    console.log("inside clerkWebhook");
    const whook = new Webhook(process.env.CLER_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };
      
        try {
          const user = await User.create(userData);
          console.log("User created:", user);
          res.status(201).json({ success: true, user });
        } catch (error) {
          console.error("Error creating user:", error);
          res.status(500).json({ success: false, error: error.message });
        }
        break;
      }
      case "user.updated": {
        const userData = {
          email: data.email_address[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await User.findOneAndUpdate({ clerkId: data.id }, userData);
        res.json({});
        break;
      }
      case "user.deleted": {
        await User.findByIdAndDelete({ clerkId: data.id });
        res.json({});

        break;
      }
      default:
        break;
    }
  } catch (err) {
    console.log(err.message);
    res.json({ success: false, message: err?.message });
  }
};

export const userCredits = async (req, res) => {
  try {
    const { clerkId } = req.body;

    console.log(clerkId, "clerkId from the back");

    const userData = await User.findOne({ clerkId });

    console.log(userData, "userData");

    res.json({ success: true, credits: userData.creditBalance });
  } catch (err) {
    console.log(err.message);
    res.json({ success: false, message: err.message });
  }
};
