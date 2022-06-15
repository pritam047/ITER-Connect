import mongoose from 'mongoose';

const blogSchema =new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    name: String,
    creator: String,
    createdAt:{type:Date,default:new Date()}
})

var Blog=mongoose.model("Blog",blogSchema);

export default Blog;