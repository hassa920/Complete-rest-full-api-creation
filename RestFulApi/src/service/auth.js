// const sessionIdToUserMap=new Map();
const jwt = require("jsonwebtoken")
const secretKey="27272627hjw"
// function setUser(id,user)
// {
// return sessionIdToUserMap.set(id,user)
// }
// ya function hamara liya token banaye ga 
// secret key hoti ha wo aik stamp ki tarha hoti ha taka koi token khol kr chnage na krska
function setUser(user) {
    const payload = {
        id: user.id, // Assuming user has an 'id' field
        email: user.email, // Include necessary user information
        password:user.password
        // Add more user information if needed
    };
    return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
}


// function getUser(id)
// {
// return sessionIdToUserMap.get(id)
// }

function getUser(token)
{
    if (!token) return null;
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        console.error("Error verifying token:", error);
        return null;
    }
}

module.exports={
    setUser,
    getUser,
}