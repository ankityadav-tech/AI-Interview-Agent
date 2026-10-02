import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {

        const { token } = req.cookies;

        console.log("TOKEN:", token);

        if (!token) {
            return res.status(401).json({
                message: "No token found"
            });
        }

        const verifyToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log("VERIFY TOKEN:", verifyToken);

        req.userId = verifyToken.userId;

        next();

    } catch (error) {

        console.log("AUTH ERROR:", error.message);

        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

export default isAuth;