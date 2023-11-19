const express=require("express");

const app=express();
const PORT=3000;

app.listen(PORT,()=>{
  console.log("Server is Listning");
});

app.get('/',(req,res)=>{
  res.send("Hello Pathum");
});

app.post("/save",(req,res)=>{
  console.log(req);
  res.send("Ok Data Received")
})