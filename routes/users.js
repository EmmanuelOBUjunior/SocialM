const router = require("express").Router();


//update a user
//delete a user
//get a user
//follow a user
//unfollow a user
router.get("/", (req, res) => {
    res.send("This is user page")
})

module.exports = router