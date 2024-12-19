const authMiddleware = (req, res, next) => {
    // Example authentication logic
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    next();
  };
  
  module.exports = authMiddleware;
  