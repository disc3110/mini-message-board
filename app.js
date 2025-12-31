const express = require("express");
const app = express();
const PORT = 3000;

// Set up

app.set("view engine", "ejs"); // Set EJS as the view engine
app.use(express.urlencoded({ extended: true })); // middleware to parse URL-encoded bodies
app.use(express.static("public"));  // Serve static files 



// import routes
const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");

// Use routes
app.use("/", indexRouter);
app.use("/messages", messageRouter);


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});