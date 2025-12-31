const { Router } = require("express");
const messageRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


// Routes for message board
messageRouter.get("/", (req, res) => {
  res.render("messages", {
    messages: messages
  });
});

messageRouter.get("/new", (req, res) => {
  res.render("newMessage", {
    title: "Messages",
  });
});


module.exports = messageRouter;