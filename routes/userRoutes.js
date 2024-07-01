const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = require("../controllers/userController");

//Log in 
router.post('/auth/login', async (req,res) => {
    const { username, password } = req.body;
    let user_db = await userController.user_info(username);

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    if (!user_db) {
        return res.status(400).json({ message: 'Invalid username or password'});
    }

    const passwordValid = await bcrypt.compare(password, user_db.password);
    if (!passwordValid) {
        return res.status(400).json({ message: 'Invalid username or password'});
    }

    const token = jwt.sign({ username: user_db.username, role: user_db.role }, 'secret', {
        expiresIn: '1h'
      });

    res.json({ token });  
    })


//Registrarse
router.post('/auth/register', (req, res) => {
    userController.create_user(req, res);
});

module.exports = router;