const express= require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("hello from server")

})

app.listen(8000,()=>{
    console.log("server is running on 8000");
})