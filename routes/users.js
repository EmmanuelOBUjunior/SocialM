const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("This is user page")
})

module.exports = router