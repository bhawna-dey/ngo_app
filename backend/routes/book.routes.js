const router = require("express").Router();

var bookController=require("../controllers/book.controller");

router.post("/", bookController.addBookDonate);

module.exports = router;