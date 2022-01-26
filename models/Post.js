// 블로그에서 그대로 긁어옴

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({    
  // postid: {
  //   type:Number,
  //   required:true,
  //   unique:true
  // },  
  title:{
    type:String,
    required:true
  },
  body:{
    type:String,
    required:true
  },
  // nick:{
  //   type:String,
  //   required:true,
  //   unique:true
  // },
  // pw:{
  //   type:String,
  //   required:true,
  //   unique:true
  // },
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:{
    type:Date
  },
});

const Post = mongoose.model('post', postSchema);
module.exports = Post;