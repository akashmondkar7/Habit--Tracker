import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./config/mongoose.js";

dotenv.config();
connectDB();

const app= express();
app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("home");
});



const Port =process.env.PORT || 8000

 app.listen(Port,()=>{

     console.log(`server is running on Port,${Port}`)


 });