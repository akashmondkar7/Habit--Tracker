import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app= express();
const Port =process.env.PORT || 8000


app.get("/",(req,resp)=>{


    resp.send("Home")

})
 app.listen(Port,()=>{

     console.log(`server is running on Port,${Port}`)


 });