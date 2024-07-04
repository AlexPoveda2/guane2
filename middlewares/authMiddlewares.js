const jwt = require('jsonwebtoken');

const authMiddleware = (requiredRoles) => (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Acces denied. No token provided'});
    }

    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded;

        if (requiredRoles && !requiredRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Acces denied. You do not have the required role.'});
        }

    next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token.' });
    }                                                               
}

module.exports = authMiddleware;