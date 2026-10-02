import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connect");

    } catch (error) {
        console.log(`database erorr ${error}`);
    }
};

export default connectDb;