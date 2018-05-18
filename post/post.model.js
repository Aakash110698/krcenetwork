const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
postedBy:String,
time:String,
pictureURL:String,
textContent:String,
tags:Array,
comments:Mixed
});
mongoose.model('User', PostSchema);

module.exports = mongoose.model('post');