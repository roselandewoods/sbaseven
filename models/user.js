const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: [true, 'Username is required'], 
    unique: true, 
    trim: true 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true, 
    trim: true 
  },
  password: { 
    type: String, 
    required: [true, 'Password is required'] 
  },
 
});

// We need to create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
