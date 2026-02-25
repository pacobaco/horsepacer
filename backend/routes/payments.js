
const express=require("express")

const router=express.Router()

const Stripe=require("stripe")

const stripe=

Stripe("YOUR_KEY")


router.post("/checkout",

async(req,res)=>{

const session=

await stripe.checkout.sessions.create({

payment_method_types:["card"],

line_items:[{

price_data:{

currency:"usd",

product_data:{

name:"Step Unlock"

},

unit_amount:200

},

quantity:1

}],

mode:"payment",

success_url:"http://localhost:3000/dashboard",

cancel_url:"http://localhost:3000/tasks"

})

res.json({id:session.id})

})


module.exports=router
