import express from "express";
import path from "path";
import cors from 'cors';
import routes from "./routes";

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Serving static files
app.use("/temp", express.static(path.resolve(__dirname, "..", "temp")));

app.listen(process.env.SERVER || 3000);
