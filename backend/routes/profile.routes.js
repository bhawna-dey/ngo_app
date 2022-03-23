const router = require("express").Router();

var profileController=require("../controllers/profile.controller");

router.post("/", profileController.addProfile);

module.exports = router;