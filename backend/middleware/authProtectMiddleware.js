const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = require("../model/authSchema"); // Ensure correct model import

const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Invalid or missing token" });
    }

    token = token.split(" ")[1]; // ✅ Extract token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("✅ Token decoded:", decoded);

    // 🔥 Fetch user from DB using decoded userId
    const user = await auth.findById(decoded.userId).select("-password");
    console.log("👤 User fetched from DB:", user);

    if (!user) {
      console.log("❌ User not found in database");
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // ✅ Attach user object to req.user
    console.log("✅ req.user set:", req.user);

    next();
  } catch (error) {
    console.error("❌ Token verification error:", error.message);
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = protect;
