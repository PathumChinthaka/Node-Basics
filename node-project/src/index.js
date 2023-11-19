const express=require("express");
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const mongoose=require("mongoose");
mongoose.set('strictQuery',false);

const PORT=3000;

app.get('/',(req,res)=>{
  res.send("Hello Pathum");
});

app.post("/save",(req,res)=>{
  console.log(req.body);
  res.send(req.body);
});

const start=async()=>{

  try{

    await mongoose.connect("mongodb+srv://pathum:KgQjzcmc1eZjOXOm@cluster0.hiwcmgf.mongodb.net/?retryWrites=true&w=majority");
  
    app.listen(PORT,()=>{
      console.log("Server is Listning");
    });

  }catch(error){
    console.log(error.message);
  }
}

start();