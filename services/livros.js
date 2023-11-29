const { readFileSync, writeFileSync } = require("fs");

const books = JSON.parse(readFileSync("livros.json"));

function getBooksAPI() {
  return books;
}

function deleteBookAPI(id) {
  const filteredBooks = books.filter((book) => book.id !== id);

  writeFileSync("livros.json", JSON.stringify(filteredBooks));
}

function addBookAPI(body) {
  const newBoookList = [...books, body];

  writeFileSync("livros.json", JSON.stringify(newBoookList));
}

function editBookAPI(id, body) {
  const index = books.findIndex((item) => item.id === id);

  const newBooks = [...books];

  newBooks[index] = { ...newBooks[index], ...body };

  writeFileSync("livros.json", JSON.stringify(newBooks));
}

module.exports = {
  getBooksAPI,
  deleteBookAPI,
  addBookAPI,
  editBookAPI,
};
