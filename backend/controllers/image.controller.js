import axios from "axios";
import User from "../models/user.model.js";
import FormData from "form-data";
import { upload } from "../middlewares/multer.js";

export const removeBgImage = async (req, res) => {
  try {
    const { clerkId } = req.body;

    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message || "Image upload failed",
        });
      }

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No image file provided",
        });
      }

      const user = await User.findOne({ clerkId });
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User Not Found",
        });
      }

      if (user.creditBalance === 0) {
        return res.status(403).json({
          success: false,
          message: "No Credit Balance",
          creditBalance: user.creditBalance,
        });
      }

      const photoroomFormData = new FormData();
      photoroomFormData.append("image_file", req.file.buffer, {
        filename: "image.jpg",
        contentType: "image/jpeg",
      });

      const { data } = await axios.post(
        "https://sdk.photoroom.com/v1/segment",
        photoroomFormData,
        {
          headers: {
            "x-api-key": process.env.IMAGE_BACKGROUND_REMOVE_API,
            ...photoroomFormData.getHeaders(),
          },
          responseType: "arraybuffer",
        }
      );

      const base64Image = Buffer.from(data, "binary").toString("base64");
      const resultImage = `data:image/png;base64,${base64Image}`;

      await User.findByIdAndUpdate(user._id, {
        creditBalance: user.creditBalance - 1,
      });

      return res.json({
        success: true,
        resultImage,
        creditBalance: user.creditBalance - 1,
        message: "Background Removed",
      });
    });
  } catch (error) {
    console.error("Background removal error:", error);
    return res.status(500).json({
      success: false,
      message: "Error processing image",
    });
  }
};
