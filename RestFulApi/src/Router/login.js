const express = require("express");
const { signUp,logIn } = require("../controllers/login");
const router = express.Router();



// Define the route for POST requests and use the signUp function as the callback
router.post("/", signUp);

router.post('/login',logIn)

module.exports = router;
