import mongoose from "mongoose";
import { configDotenv } from "dotenv";

const connectDB = async () => {
try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error", error);
  }
};

export default connectDB;