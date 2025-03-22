import connectDB from "./database/database_index.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config();

connectDB()
    .then(() => {
        app.listen(process.env.PORT)
        console.log(`Server started on port ${process.env.PORT}`);
    })

    .catch((err) => {
        console.log("MONGO ERROR: " + err);
    })
