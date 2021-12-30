const router = require("express").Router()
const Post = require("../models/Post")

//create a post
router.post("/", async(req,res) =>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }catch(err){
        res.status(500).json(err)
    }
})

//update a post
router.put("/:id", async(req,res) =>{
    try{
    const post = await Post.findById(req.params.id)
    if(post.userId === req.body.userId){
        await post.updateOne({$set: req.body})
        res.status(200).json("Post updated successfully")
    }else{
        res.status(503).json("You only update your post")
    }
    }catch(err){

    }
});

//delete a post
router.delete("/:id", async(req,res) =>{
    try{
    const post = await Post.findById(req.params.id)
    if(post.userId === req.body.userId){
        await post.deleteOne()
        res.status(200).json("Post deleted successfully")
    }else{
        res.status(503).json("You only delete your post")
    }
    }catch(err){
        res.status(400).json(err)
    }
})

//like and dislike a post
router.put("/:id/like", async(req,res) =>{
    try{
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}})
            res.status(200).json("Post liked")
        }else{
            await post.updateOne({$pull:{likes: req.body.userId}})
            res.status(200).json("Post disliked")
        }
    }catch(err){
        res.status(400).json(err)
    }
})
//get a post
//get timeline
module.exports = router