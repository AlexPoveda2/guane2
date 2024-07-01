const Task = require("../models/task");

class taskController {
        constructot() {
    }

    async create_task(req, res) {
    try {
        const { title, description, project_id, assigned_to } = req.body;

        const addTask = await Task.create({
            title: title,
            description: description,
            project_id: project_id,
            assigned_to: assigned_to
        });

        res.status(201).json({ message: 'Task created successfully', task : addTask});

    } catch (error) {
        res.status(500).jason({ message: 'Error creating task', error: error.message});
    }  
    }     
}

module.exports = new taskController();