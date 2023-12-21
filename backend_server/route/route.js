const express = require("express");
const router = express.Router();

const stkPush = require("../controller/stkPushController");

router.post("/prompt-user", stkPush);

module.exports = router;
