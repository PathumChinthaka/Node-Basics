const express=require("express");
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const mongoose=require("mongoose");
mongoose.set('strictQuery',false);

const CONNECTION=process.env.CONNECTION;

if(process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}

const PORT=process.env.PORT || 3000;

app.get('/',(req,res)=>{
  res.send("Hello Pathum");
});

app.post("/save",(req,res)=>{
  console.log(req.body);
  res.send(req.body);
});

const start=async()=>{

  try{

    await mongoose.connect(CONNECTION);
  
    app.listen(PORT,()=>{
      console.log("Server is Listning on PORT"+PORT);
    });

  }catch(error){
    console.log(error.message);
  }
}

start();