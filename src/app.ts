import express, { Application } from "express";
import mongoose from "mongoose";

import routes from "./routes";

const app: Application = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost:27017/tvScraper")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use(express.json());

app.use("/api", routes);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app, server };
