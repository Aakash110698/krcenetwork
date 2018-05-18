var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  isVerified:{
      type:Boolean,
      default:false
  },
  password: String,
  phoneNumber: String,
  year:String,
  isActive:{
    type:Boolean,
    default:true
  },
  isBlocked:{
      type:Boolean,
      default:false
  },
  section: String,
  department: String,
  photoUrl:{
      type:String,
      default:"none"
  },
  createdTime:{
      type:Date,
      default:Date
  }
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');