import React from "react";
import { BsRobot } from "react-icons/bs";
import { IoSparklesSharp } from "react-icons/io5";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const ServerUrl = import.meta.env.VITE_SERVER_URL;

function Auth({ isModel = false }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleAuth = async () => {
        try {

            // 1. Firebase Google Login
            const response = await signInWithPopup(auth, provider);

            const user = response.user;

            console.log("Firebase User:", user);

            // 2. Send user data to backend
            const result = await axios.post(
                `${ServerUrl}/api/auth/google`,
                {
                    name: user.displayName,
                    email: user.email
                },
                {
                    withCredentials: true
                }
            );

            // 3. Check backend response
            console.log("Backend User:", result.data);

            // 4. Store user in Redux
            dispatch(setUserData(result.data));

            // 5. Navigate after login
            if (!isModel) {
                navigate("/");
            }

        } catch (error) {

            console.log(
                "Google Auth Error:",
                error.response?.data || error.message
            );

        }
    };

    return (
        <div className="w-full">

            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-gray-200"
            >

                <div className="flex items-center justify-center gap-3 mb-6">

                    <div className="bg-black text-white p-2 rounded-lg">
                        <BsRobot size={18} />
                    </div>

                    <h2 className="font-semibold text-lg">
                        InterviewIQ.AI
                    </h2>

                </div>

                <h1 className="text-2xl md:text-3xl font-semibold text-center leading-snug mb-4">

                    continue with{" "}

                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2">

                        <IoSparklesSharp size={16} />

                        AI smart Interview

                    </span>

                </h1>

                <p className="text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8">

                    Sign in to start AI-powered mock interviews,
                    track your progress and unlock detailed performance insights.

                </p>

                <motion.button
                    onClick={handleGoogleAuth}
                    whileHover={{ opacity: 0.9, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full drop-shadow-md"
                >

                    <FcGoogle size={20} />

                    Continue with Google

                </motion.button>

            </motion.div>

        </div>
    );
}

export default Auth;