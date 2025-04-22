import dotenv from "dotenv";
import app from "./src/app.js";
import { connectdb } from "./src/db/db.js";
dotenv.config();

//connect db
connectdb()

app.listen(process.env.PORT, () => {
  console.log("app is running on port :", process.env.PORT);
});
