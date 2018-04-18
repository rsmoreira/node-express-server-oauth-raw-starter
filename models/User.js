const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId : String
});

// This command below will tell mongoose to create a new collection named 'users', 
// using the userSchema as the model
mongoose.model('user', userSchema); 