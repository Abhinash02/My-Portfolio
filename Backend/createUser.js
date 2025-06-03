// const mongoose = require('mongoose');
// const User = require('./models/User');

// mongoose.connect('mongodb://localhost:27017/portfolio')
//   .then(() => console.log('MongoDB connected for user creation'))
//   .catch((err) => {
//     console.error('MongoDB connection error:', err);
//     process.exit(1);
//   });

// const createUser = async () => {
//   try {
//     const existingUser = await User.findOne({ username: 'Abhinash' });
//     if (existingUser) {
//       console.log('User "admin" already exists:', {
//         username: existingUser.username,
//         password: existingUser.password,
//         _id: existingUser._id,
//       });
//       mongoose.connection.close();
//       return;
//     }

//     const newUser = await User.create({
//       username: 'Abhinash',
//       password: 'KanuuAbhi',
//     });
//     console.log('User "admin" created successfully:', {
//       username: newUser.username,
//       password: newUser.password,
//       _id: newUser._id,
//     });
//     mongoose.connection.close();
//   } catch (err) {
//     console.error('Error creating user:', err);
//     mongoose.connection.close();
//     process.exit(1);
//   }
// };

// createUser();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/portfolio')
  .then(() => console.log('MongoDB connected for user creation'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

const createUser = async () => {
  try {
    const existingUser = await User.findOne({ username: 'Abhinash' });
    if (existingUser) {
      console.log('User "Abhinash" already exists:', {
        username: existingUser.username,
        password: '[HIDDEN]', // Don't log passwords
        _id: existingUser._id,
      });
      mongoose.connection.close();
      return;
    }

    const hashedPassword = await bcrypt.hash('KanuuAbhi', 10);
    const newUser = await User.create({
      username: 'Abhinash',
      password: hashedPassword,
    });
    console.log('User "Abhinash" created successfully:', {
      username: newUser.username,
      password: '[HIDDEN]', // Don't log passwords
      _id: newUser._id,
    });
    mongoose.connection.close();
  } catch (err) {
    console.error('Error creating user:', err);
    mongoose.connection.close();
    process.exit(1);
  }
};

createUser();