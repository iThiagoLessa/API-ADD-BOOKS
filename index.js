const express = require("express");
const { getBooks, deleteBook } = require("./routes/livros");
const routerBooks = require("./routes/livros");

const app = express();
app.use(express.json());

const port = 8000;

app.use("/livros", routerBooks);

app.listen(port, () => {
  console.log("server running");
});
