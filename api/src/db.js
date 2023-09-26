const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;



mongoose
  .connect(MONGO_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  console.log("Connected to MongoDB")