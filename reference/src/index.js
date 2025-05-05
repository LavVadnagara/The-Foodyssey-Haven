import connectDB from "./database/database_index.js";
import { app } from "./app.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "./.env") });

connectDB()
    .then(() => {
        app.listen(process.env.PORT)
        console.log(`Server started on port ${process.env.PORT}`);
    })

    .catch((err) => {
        console.log("MONGO ERROR: " + err);
    })
