const Project = require("../models/project");

class projectController {
    constructor() {
    }

    async create_project(name, description, res){
        try {
            const addProject = await Project.create({
                name: name, description:description
            });

            res.status(201).json({ message: 'Project created succesfully', project: addProject});

        } catch (error) {
            res.status(500).json({ message: 'Erro creating project', error: error.message});
        }
    }
}

module.exports = new projectController();