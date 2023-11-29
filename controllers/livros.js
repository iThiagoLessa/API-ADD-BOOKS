const {
  getBooksAPI,
  deleteBookAPI,
  addBookAPI,
  editBookAPI,
} = require("../services/livros");

function getBooks(req, res) {
  try {
    const books = getBooksAPI();
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook(req, res) {
  try {
    const { id } = req.params;

    deleteBookAPI(parseInt(id));
    res.send("livro deletado com sucesso");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function addBook(req, res) {
  try {
    const { body } = req;

    addBookAPI(body);
    res.send(200);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function editBook(req, res) {
  try {
    const { id } = req.params;
    const { body } = req;

    if (id && Object.keys(body).length > 0) {
      editBookAPI(Number(id), body);
      res.send(200);
    } else {
      res.send(405);
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getBooks,
  deleteBook,
  addBook,
  editBook,
};
