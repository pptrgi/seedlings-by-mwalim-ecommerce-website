const express = require('express')
const getAccessToken = require('../customMiddleware/authGetAccessToken')
const stkPush = require('../controller/stkPushController')
const router = express.Router()

router.post('/prompt-user', getAccessToken, stkPush)

module.exports = router