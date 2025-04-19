import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized, Login Again",
      });
    }

    const token_decode = jwt.decode(token);

    if (!token_decode || !token_decode.clerkId) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    req.body.clerkId = token_decode.clerkId;
    next();
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ success: false, message: err.message });
  }
};
