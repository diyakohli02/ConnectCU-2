const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        
        if (!token) {
            return res.status(401).json({ message: 'No authentication token, access denied' });
        }

        // Remove Bearer if present
        const actualToken = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;
        
        const verified = jwt.verify(actualToken, process.env.JWT_SECRET || 'fallback_secret_key');
        if (!verified) {
            return res.status(401).json({ message: 'Token verification failed, authorization denied' });
        }
        
        req.user = verified.id;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = auth;
