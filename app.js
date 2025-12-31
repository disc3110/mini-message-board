const express = require("express");
const app = express();
const PORT = 3000;

// import routes
const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");

// Use routes
app.use("/", indexRouter);
app.use("/messages", messageRouter);

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files 
app.use(express.static("public"));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});