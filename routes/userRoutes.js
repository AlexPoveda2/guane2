const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController");

router.post('/auth/register', (req, res) => {
    userController.create_user(req, res);
});

module.exports = router;