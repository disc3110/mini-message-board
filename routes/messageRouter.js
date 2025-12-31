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
  res.render("message/messages", {
    messages: messages
  });
});

messageRouter.get("/new", (req, res) => {
  res.render("message/newMessage", {
  });
});

messageRouter.post("/new", (req, res) => {
  const newMessage = {
    text: req.body.message,
    user: req.body.username,
    added: new Date()
  };
  messages.push(newMessage);
  res.redirect("/messages");
});


module.exports = messageRouter;