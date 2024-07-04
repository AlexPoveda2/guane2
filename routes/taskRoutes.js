const express = require('express');
const router = express.Router();

const taskController = require("../controllers/taskController");
const authMiddleware = require('../middlewares/authMiddlewares');

router.post('/task', (req, res) => {
    taskController.create_task(req, res);
});

router.get('/task', authMiddleware(), (req, res) => {
    taskController.task_list(req, res);
})

module.exports = router;