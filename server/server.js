const express = require("express");
const { readdirSync } = require("fs");
require("dotenv").config();
const morgan = require("morgan");

const app = express();

//middlewares
app.use(morgan("dev"));

//route middlewares
readdirSync("./routes").map((file) =>
  app.use("/api", require(`./routes/${file}`))
);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
