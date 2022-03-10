const express = require("express")

const app= express()

app.get("/",(req,res)=>{
    res.send("<h1>WELCOME TO THE NODE APP</h1>")

})

app.get("/about",(req,res)=>{
    res.send("<h1>About NODE APP</h1>")

})

app.get("/carer",(req,res)=>{
    res.send("<h1>Career NODE APP</h1>")

})

app.listen(3000);