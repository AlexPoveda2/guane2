const express = require('express');
const router = express.Router();

const projectController = require("../controllers/projectController");
const authMiddleware = require("../middlewares/authMiddlewares");

router.post('/projects', (req, res) => {
    const {name, description} = req.body;
    projectController.create_project(name, description, res);
})

router.get('/projects', authMiddleware(["admin", "manager"]), (req,res) => {
    projectController.project_list(req,res);
})
module.exports = router;