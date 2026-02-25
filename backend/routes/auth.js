
const express=require("express")

const router=express.Router()

const bcrypt=require("bcrypt")

const jwt=require("jsonwebtoken")


router.post("/login",(req,res)=>{

const token=

jwt.sign(

{user:req.body.email},

"secret"

)

res.json({token})

})


module.exports=router
