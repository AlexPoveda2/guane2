const express = require('express');
const router = express.Router();

const projectController= require("../controllers/projectController");

router.post('/projects', (req, res) => {
    const {name, description} = req.body;
    projectController.create_project(name, description, res);
})

module.exports = router;