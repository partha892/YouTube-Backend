import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

export default app;
