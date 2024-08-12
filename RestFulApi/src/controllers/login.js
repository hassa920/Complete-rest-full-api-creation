const {v4 : uuidv4}= require("uuid")
const User = require('../Models/User');
const {setUser}=require('../service/auth');
const { use } = require("../Router/login");

const signUp = async (req, res) => {
    console.log(req.body);
    const user = new User(req.body); // Corrected line
    user.save()
        .then(() => {
            res.status(201).send(user);
        })
        .catch((e) => {
            res.status(400).send(e);
        });
};



const logIn = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(404).send("User not found");
        }

        // const sessionId = uuidv4(); // Generate session ID
        // setUser(sessionId, user);
        const token =setUser(user);
        console.log("token is: ",token)

        // Send session ID in a cookie
        // res.cookie("sessionId", sessionId, { 
        //     httpOnly: true, // This prevents client-side JavaScript from accessing the cookie
        //     maxAge: 3600000, // Cookie expiry time in milliseconds (e.g., 1 hour)
        //     secure: true, // This flag ensures the cookie is only sent over HTTPS
        //     sameSite: "strict" // This flag helps protect against CSRF attacks
        // });
        res.set('Authorization', `Bearer ${token}`);

        

        // return res.status(201).send({ user, sessionId });
        
        return res.status(201).send({ user, token });
    
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};



module.exports = {  
    
    signUp,
    logIn
}
