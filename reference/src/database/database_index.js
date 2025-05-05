import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { DB_NAME } from "../utils/constant.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const connectDB = async () => {
    try {
        const dbURI = `${process.env.MONGODB_URL}/${DB_NAME}`;
        const connection = await mongoose.connect(dbURI);

        console.log(`\nMongoDB connected successfully!`);
        console.log(`Database: ${connection.connection.name}`);
    } catch (error) {
        console.error("Failed to connect to MongoDB.");
        console.error("Error details:", error.message || error);
        process.exit(1);
    }
};

export default connectDB;