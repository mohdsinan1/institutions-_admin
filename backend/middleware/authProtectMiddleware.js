const jwt = require("jsonwebtoken");
require("dotenv").config();

const protect = (req, res, next) => {
  let token = req.headers.authorization;

 

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Invalid or missing token" });
  }

  try {
    token = token.split(" ")[1]; // ✅ Extract token correctly
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded; // ✅ Attach user data to request
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = protect;
