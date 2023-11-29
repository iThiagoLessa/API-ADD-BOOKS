const { Router } = require("express");
const {
  getBooks,
  deleteBook,
  addBook,
  editBook,
} = require("../controllers/livros");

const router = Router();

// rota para ver todos os livros
router.get("/", getBooks);

//rota para adicionar um livro
router.post("/", addBook);

// rota para editar um livro do json
router.post("/editar/:id", editBook);

// ROTA PARA DELETAR UM LIVRO DO MEU JSON
router.delete("/:id", deleteBook);

module.exports = router;
