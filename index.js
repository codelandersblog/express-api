const express = require("express");
const server = express();
const port = 3000;
const books = require("./db.json");

server.get("/books", (req, res) => {
  res.json(books);
});

server.get("/book/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const book = books.find((b) => b.id === id);
  if (!book) {
    res.status(404).json({ error: "not found" });
  } else {
    res.json(book);
  }
});

server.listen(3000, () => {
  console.log(`Server listening on port ${port}`);
});
