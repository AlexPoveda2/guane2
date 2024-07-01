const User = require("../models/user");
const bcrypt = require('bcrypt');

class UserController {
    constructor() {
        // Initialize any dependencies or settings here
    }

    async create_user(req, res) {
        try {
            const { username, password, role } = req.body;

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = await User.create({
                username: username, password: hashedPassword, role: role
            });
            
            res.status(201).json({ message: 'User created successfully'});
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error: error.message });
        }
    }

    async user_info(username) {
        try {
            const user_db = await User.findOne({ where: { username: `${username}`}});
            return user_db;
        } catch (error) {
            res.status(500).json({ message: 'Error finding user', error: error.message});
        }
    }
}

module.exports = new UserController();