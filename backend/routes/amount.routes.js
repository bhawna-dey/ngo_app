const router = require("express").Router();

var amountController=require("../controllers/amount.controller");

router.post("/", amountController.addAmountDonate);

module.exports = router;