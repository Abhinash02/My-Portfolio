// // const jwt = require('jsonwebtoken');

// // module.exports = (req, res, next) => {
// //   const token = req.header('Authorization')?.replace('Bearer ', '');
// //   if (!token) {
// //     return res.status(401).json({ message: 'No token, authorization denied' });
// //   }
// //   try {
// //     const decoded = jwt.verify(token, 'your-secret-key');
// //     req.user = decoded;
// //     next();
// //   } catch (err) {
// //     res.status(401).json({ message: 'Token is not valid' });
// //   }
// // };
// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   const token = authHeader.split(' ')[1];
//   try {
//     const decoded = jwt.verify(token, 'your-secret-key');
//     req.userId = decoded.userId;
//     next();
//   } catch (err) {
//     console.error('Token verification error:', err.message);
//     if (err.name === 'TokenExpiredError') {
//       return res.status(401).json({ message: 'Token expired' });
//     }
//     return res.status(401).json({ message: 'Invalid token' });
//   }
// };
// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   const authHeader = req.header('Authorization');
//   if (!authHeader) {
//     return res.status(401).json({ error: 'No token, authorization denied' });
//   }
//   const token = authHeader.replace('Bearer ', '');
//   try {
//     const decoded = jwt.verify(token, 'your-secret-key');
//     req.user = decoded.userId;
//     next();
//   } catch (err) {
//     console.error('Token error:', err);
//     res.status(401).json({ error: 'Token is not valid' });
//   }
// };

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;