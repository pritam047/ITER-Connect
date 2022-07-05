import mongoose from "mongoose";


const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  username: { type: String, required:  false, default: Math.random().toString(36).substring(2, 9) },
  imageUrl: {type: String, required: false},
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);