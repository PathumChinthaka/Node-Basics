const express=require("express");

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT=3000;


app.listen(PORT,()=>{
  console.log("Server is Listning");
});

app.get('/',(req,res)=>{
  res.send("Hello Pathum");
});

app.post("/save",(req,res)=>{
  console.log(req.body);
  res.send(req.body);
})