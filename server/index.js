require("dotenv").config()
const express = require("express")
const PORT = 2580
//Backend start point
const app = express();

app.listen(PORT, (req, res) => {
  console.log("Backend is running")
})
