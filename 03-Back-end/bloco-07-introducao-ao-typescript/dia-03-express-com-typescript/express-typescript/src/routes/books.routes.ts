import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const router = Router();

const booksController = new BooksController();

router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);

router.get('/books', (req, res) => booksController.getAll(req, res));
router.get('/books/:id', (req, res) => booksController.getById(req, res));

export default router;