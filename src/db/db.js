import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Failed to connect to the database:");

    console.error(`Error Name: ${error.name}`);

    console.error(`Error Message: ${error.message}`);

    process.exit(1); // Optional: stop the app if DB connection fails
  }
};
