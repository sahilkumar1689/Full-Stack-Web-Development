const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type:String,
    require:true
  },
  email: { type: String, required: true, unique: true },
  profileImg:{type:String,default:""},
  password: { type: String, default: ""}, // only used for manual auth
  googleId: { type: String, default: ""}, // only used for Google login
  facebookId: { type: String, default: ""}, // for future Facebook login
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
