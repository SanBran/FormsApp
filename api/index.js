require("dotenv").config();
const express = require("express");
const router = require("./src/routes");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require('mongoose')

const PORT = process.env.PORT || 8000;
const MONGO_URL = "mongodb://127.0.0.1:27017/forms";

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use(express.urlencoded({extended:true}))

mongoose.connect(MONGO_URL, {
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



