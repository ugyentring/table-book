require("dotenv").config();
const express = require("express");
const { readdirSync } = require("fs");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//database connection
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("Database connection failed!", err));

//middlewares
app.use(cors());
app.use(morgan("dev"));

//route middlewares
readdirSync("./routes").map((file) =>
  app.use("/api", require(`./routes/${file}`))
);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
