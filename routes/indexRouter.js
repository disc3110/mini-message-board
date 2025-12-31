const { Router } = require("express");
const indexRouter = Router();

// Home page
indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini message board",
  });
});


module.exports = indexRouter;