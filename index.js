const express = require("express")
const app = express()

const port = 6000;
app.get("/g",async(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})