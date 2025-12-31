const { Router } = require("express");
const indexRouter = Router();

// Home page
indexRouter.get("/", (req, res) => {
  res.redirect("/messages");
});


module.exports = indexRouter;