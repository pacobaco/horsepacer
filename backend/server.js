const express=require("express");
const cors=require("cors");
const {v4:uuidv4}=require("uuid");

const db=require("./database");
const tasks=require("./tasks");
const {createToken,verifyToken}=require("./auth");
const {createPayment}=require("./stripe");

const app=express();

app.use(cors());
app.use(express.json());



app.post("/register",(req,res)=>{

const id=uuidv4();

db.run(

"INSERT INTO users VALUES(?,?,?,?)",

[id,req.body.name,req.body.email,20]

);

res.json({
token:createToken({id})
});

});


app.get("/tasks",(req,res)=>{

tasks.getTasks((err,data)=>{

res.json(data);

});

});


app.get("/steps/:taskId",verifyToken,(req,res)=>{

tasks.getSteps(req.params.taskId,

(err,data)=>{

res.json(data);

});

});


app.post("/buyCredits",async(req,res)=>{

const payment=

await createPayment(req.body.amount);

res.json(payment);

});


app.listen(3000,()=>{

console.log("HORSE PACER SaaS Running");

});
