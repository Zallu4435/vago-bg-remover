import { Webhook } from "svix";
import User from "../models/user.model.js";
import Transaction from "../models/transaction.model.js";

export const clerkWebhooks = async (req, res) => {
  try {
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
          res.status(201).json({ success: true, user });
        } catch (error) {
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
        await User.findOneAndDelete({ clerkId: data.id });
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

    const userData = await User.findOne({ clerkId });

    res.json({ success: true, credits: userData.creditBalance });
  } catch (err) {
    console.log(err.message);
    res.json({ success: false, message: err.message });
  }
};

export const updateCredits = async (req, res) => {
  const { clerkId, credits, planId, amount } = req.body;

  try {
    const user = await User.findOne({ clerkId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.creditBalance += credits;
    await user.save();

    const newTransaction = new Transaction({
      userId: user._id,
      planId: planId,
      credits: credits,
      amount: amount,
      paymentStatus: "Completed",
      transactionDate: new Date(),
    });

    await newTransaction.save();

    res.json({
      message: "Credits updated and transaction saved successfully",
      credits: user.creditBalance,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getUserTransactions = async (req, res) => {
  try {
    const { clerkId } = req.body;

    const user = await User.findOne({ clerkId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const transactions = await Transaction.find({ userId: user._id })
      .populate("userId", "firstName lastName email")
      .select(
        "status transactionDate userId planId credits amount paymentStatus transactionDate"
      ); 

    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
