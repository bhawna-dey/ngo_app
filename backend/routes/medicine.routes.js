const router = require("express").Router();

var medicineController=require("../controllers/medicine.controller");

router.post("/", medicineController.addMedicineDonate);

module.exports = router;