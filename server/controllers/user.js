import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import 'dotenv/config';

import UserModel from "../models/user.js";


export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateUser = async(req,res) => {
  const { id } = req.params;
  const { imageUrl } = req.body;
  let url = imageUrl.split('upload/');
  const finalUrl = url[0] + 'upload/w_150,h_150,c_fill,g_face,r_max/' + url[1].split('/')[1]
  try{
  const editedInfo = await UserModel.findByIdAndUpdate(id, {imageUrl: finalUrl}, { new: true });

  res.json(editedInfo);
  }
  catch(err){
    res.status(500).json({ message: "Something went wrong" });
  }

}
export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};