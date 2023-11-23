const express=require("express");
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const mongoose=require("mongoose");
mongoose.set('strictQuery',false);

const Customer=require("./models/customer.js");

if(process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}

const PORT=process.env.PORT || 3000;
const CONNECTION=process.env.CONNECTION;

const customer=new Customer({
  name:'pathum',
  industry:'coding'
});

customer.save();

app.get('/',(req,res)=>{
  res.send(customer);
});

app.get("/customer/getAll",async (req,res)=>{
  try {
    //return all cllections from cloud
    // console.log(await mongoose.connection.db.listCollections().toArray());
    const result= await Customer.find();
    res.json({"Customerse":result});
  } catch (e) {
    res.status(500).json({error:e.message});
  }
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