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

    async project_list(req, res) {
        try {
            const projects = await Project.findAll();

            res.status(200).json({
                message: "Projectos encontrados",
                list: projects
            })
        } catch (error) {
            res.status(500).json({message: "Error finding projects", message: error.message});
        }
    }
}

module.exports = new projectController();