const jwt = require("jsonwebtoken");

const SECRET="horsepacer";

function createToken(user){

return jwt.sign(user,SECRET);

}

function verifyToken(req,res,next){

const token=req.headers.authorization;

if(!token) return res.status(401).send();

try{

req.user=jwt.verify(token,SECRET);

next();

}catch{

res.status(401).send();

}

}

module.exports={createToken,verifyToken};
