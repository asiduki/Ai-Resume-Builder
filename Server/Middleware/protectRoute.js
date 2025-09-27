// In Middleware/protectRoute.js
const jwt = require("jsonwebtoken");
const userSchema = require("../Models/usermodel.js"); 

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded || !decoded.userId) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }

        const user = await userSchema.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error("Authentication Error:", error.message);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: "Unauthorized - Token Expired" });
        }
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = protectRoute;