import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  whatsappNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  state: {
    type: String,
    required: true,
  },
  referralCode: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  }


}, { timestamps: true });

export default mongoose.model('User', userSchema);
