const express = require("express");
const { readdirSync } = require("fs");

const app = express();

//route middlewares
readdirSync("./routes").map((file) =>
  app.use("/api", require(`./routes/${file}`))
);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
