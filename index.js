const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');

const userRoutes = require("./routes/user");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 4000;

if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}
app.use(
  cors({
    origin: "*",
  })
);
// Middleware
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", userRoutes);

// CORS Configuration
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});
