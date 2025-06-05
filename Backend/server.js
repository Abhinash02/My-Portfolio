// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const educationRoutes = require('./routes/educationRoutes');
// const User = require('./models/User');

// const app = express();

// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
// }));
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/portfolio')
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Login route
// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;
//   console.log('Login attempt:', { username, password }); // Debug log
//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       console.log('User not found:', username); // Debug log
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     if (user.password !== password) {
//       console.log('Password mismatch for user:', { username, storedPassword: user.password }); // Debug log
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     console.log('Login successful:', username); // Debug log
//     const jwt = require('jsonwebtoken');
//     const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
//     res.json({ token });
//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// app.use('/api/education', educationRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
//   .on('error', (err) => {
//     if (err.code === 'EADDRINUSE') {
//       console.error(`Port ${PORT} is already in use. Please free the port or use a different one.`);
//       process.exit(1);
//     } else {
//       console.error('Server error:', err);
//     }
//   });


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const educationRoutes = require('./routes/educationRoutes');
// const User = require('./models/User');

// const app = express();

// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
// }));
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/portfolio')
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Login route
// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;
//   console.log('Login attempt:', { username, password });
//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       console.log('User not found:', username);
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     if (user.password !== password) {
//       console.log('Password mismatch for user:', { username, storedPassword: user.password });
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     console.log('Login successful:', username);
//     const jwt = require('jsonwebtoken');
//     const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
//     console.log('Sending token:', { token }); // Debug log
//     res.json({ token });
//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// app.use('/api/education', educationRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
//   .on('error', (err) => {
//     if (err.code === 'EADDRINUSE') {
//       console.error(`Port ${PORT} is already in use. Please free the port or use a different one.`);
//       process.exit(1);
//     } else {
//       console.error('Server error:', err);
//     }
//   });

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const educationRoutes = require('./routes/educationRoutes');
// const experienceRoutes = require('./routes/experienceRoutes');
// const skillRoutes = require('./routes/skillRoutes');
// const projectRoutes = require('./routes/projectRoutes');
// const aboutRoutes = require('./routes/aboutRoutes');
// const User = require('./models/User');

// const app = express();

// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
// }));
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/portfolio')
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Login route
// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;
//   console.log('Login attempt:', { username, password });
//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       console.log('User not found:', username);
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     if (user.password !== password) {
//       console.log('Password mismatch for user:', { username, storedPassword: user.password });
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     console.log('Login successful:', username);
//     const jwt = require('jsonwebtoken');
//     const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
//     console.log('Sending token:', { token });
//     res.json({ token });
//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// app.use('/api/education', educationRoutes);
// app.use('/api/experience', experienceRoutes);
// app.use('/api/skills', skillRoutes);
// app.use('/api/projects', projectRoutes);
// app.use('/api/about', aboutRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
//   .on('error', (err) => {
//     if (err.code === 'EADDRINUSE') {
//       console.error(`Port ${PORT} is already in use. Please free the port or use a different one.`);
//       process.exit(1);
//     } else {
//       console.error('Server error:', err);
//     }
//   });

// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const educationRoutes = require('./routes/educationRoutes');
// const experienceRoutes = require('./routes/experienceRoutes');
// const skillRoutes = require('./routes/skillRoutes');
// const projectRoutes = require('./routes/projectRoutes');
// const aboutRoutes = require('./routes/aboutRoutes');
// const resumeRoutes = require('./routes/resumeRoutes');
// const UserRoutes = require('./routes/authRoutes');

// const app = express();

// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
// }));
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected to portfolio database'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/api/education', educationRoutes);
// app.use('/api/experience', experienceRoutes);
// app.use('/api/skills', skillRoutes);
// app.use('/api/projects', projectRoutes);
// app.use('/api/about', aboutRoutes);
// app.use('/api/resume', resumeRoutes);
// app.use('/api/users', UserRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
//   .on('error', (err) => {
//     if (err.code === 'EADDRINUSE') {
//       console.error(`Port ${PORT} is already in use. Please free the port or use a different one.`);
//       process.exit(1);
//     } else {
//       console.error('Server error:', err);
//     }
//   });


// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const educationRoutes = require('./routes/educationRoutes');
// const experienceRoutes = require('./routes/experienceRoutes');
// const skillRoutes = require('./routes/skillRoutes');
// const projectRoutes = require('./routes/projectRoutes');
// const aboutRoutes = require('./routes/aboutRoutes');
// const resumeRoutes = require('./routes/resumeRoutes');
// const authRoutes = require('./routes/authRoutes');

// const app = express();

// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
// }));
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected to portfolio database'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/api/education', educationRoutes);
// app.use('/api/experience', experienceRoutes);
// app.use('/api/skills', skillRoutes);
// app.use('/api/projects', projectRoutes);
// app.use('/api/about', aboutRoutes);
// app.use('/api/resume', resumeRoutes);
// app.use('/api', authRoutes); // Changed from '/api/users' to '/api'

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
//   .on('error', (err) => {
//     if (err.code === 'EADDRINUSE') {
//       console.error(`Port ${PORT} is already in use. Please free the port or use a different one.`);
//       process.exit(1);
//     } else {
//       console.error('Server error:', err);
//     }
//   });


require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const educationRoutes = require('./routes/educationRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const skillRoutes = require('./routes/skillRoutes');
const projectRoutes = require('./routes/projectRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors({
  origin: 'https://abhinash-portfolio.onrender.com', // your frontend URL
  credentials: true // if using cookies or sessions
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected to portfolio database'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/education', educationRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  .on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${PORT} is already in use. Please free the port or use a different one.`);
      process.exit(1);
    } else {
      console.error('Server error:', err);
    }
  });
