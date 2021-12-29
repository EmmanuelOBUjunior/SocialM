const router = require("express").Router();
const bcrypt = require("bcrypt") 
const User = require("../models/User")

//update a user
router.put("/:id", async(req,res) =>{
    if(req.body.userId === req.params.id || req.user.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err){
                return res.status(403).json(err)
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body})
            res.status(200).json("Account updated successfully")
        }catch(err){
            return res.status(403).json(err)
        }
    }else{
        return res.status(403).json("You can only update your account")
    }
})
//delete a user
//get a user
//follow a user
//unfollow a user
router.get("/", (req, res) => {
    res.send("This is user page")
})

module.exports = router