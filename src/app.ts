import * as dotenv from "dotenv";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

dotenv.config({ path: __dirname + "/.env" }); // env file is expose, dont forget to include in the .gitignore file

const allowedOrigins = ["http://localhost:5173/"]; // the URI you want CORS to allow

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(options));

const PORT = parseInt(process.env.PORT as string, 10) || 8081;

app.listen(PORT, () => {
  console.log(`App is running on 🚀  ${PORT}`);
});
