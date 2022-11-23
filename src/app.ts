import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

const allowedOrigins = ["http://localhost:5173/"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(options));

const PORT = parseInt(process.env.PORT as string, 10) || 8081;

app.listen(PORT, () => {
  console.log(`App is running on 😇 ${PORT}`);
});
