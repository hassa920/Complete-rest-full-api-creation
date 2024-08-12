const {getUser} =require("../service/auth")
 const  restrictToLoggedInUserOnly  =  async (req, res, next)=> {
    try {
        console.log('Request Headers:', req.headers);
        // const sessionId = req.headers['sessionid']
        const token = req.headers['authorization']; // Assuming the token is passed in the Authorization header
        // console.log('Session ID:', sessionId);
        console.log('Token:', token);
        
        // if (!sessionId) {
        //     return res.send("Session Id not found");
        // }
          if (!token) {
            return res.send("Session Id not found");
        }

        // const user = getUser(sessionId);
        const user = getUser(token);
        if (!user) {
            return res.status(401).send("User not logged in");
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in restrictToLoggedInUserOnly middleware:", error);
        res.status(500).send("Internal server error");
    }
}

module.exports = restrictToLoggedInUserOnly;
