
const express=require("express")

const router=express.Router()

const db=require("../models/db")


router.get("/",async(req,res)=>{

const tasks=

await db.query("SELECT * FROM tasks")

res.json(tasks.rows)

})


module.exports=router
