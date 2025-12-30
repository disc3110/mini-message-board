const express = require("express");
const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files 
app.use(express.static("public"));

// Index route
app.get("/", (req, res) => {
  res.render("index", { title: "Mini message board" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});