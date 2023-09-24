require("dotenv").config();
const express = require("express");
const router = require("./src/routes");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(
  cors({
    origin: "*",
  })
);

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.urlencoded({ extended: true }));

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    server.listen(PORT, () => {
      console.log("Server raised in port " + PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

server.use("/", router);
