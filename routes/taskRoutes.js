const express = require('express');
const router = express.Router();

const taskController = require("../controllers/taskController");

router.post('/task', (req, res) => {
    taskController.create_task(req, res);
});

module.exports = router;