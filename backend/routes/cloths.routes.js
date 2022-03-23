const router = require("express").Router();

var clothsController=require("../controllers/cloths.controller");

router.post("/", clothsController.addClothsDonate);

module.exports = router;