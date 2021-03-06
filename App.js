const express=require('express');//import express
const PORT=8899;//define port
const app=express();//create object of port
let myData=(req,res,next)=>{
    req.mytitle="NeoSOFT technologies";
    next();
}

app.use('/myimages',express.static('images')); //inbuilt middleware
app.use(myData); //custom middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const frontRoutes=require('./Routes/frontRoutes');
const adminRoutes=require('./Routes/adminRoutes');

app.use("/",frontRoutes);
app.use("/admin",adminRoutes);

//define the routes
// app.get("/",(req,res)=>{
//     res.sendFile("Form.html",{root:"."});
// })
// app.post("/success",(req,res)=>{
//     res.send(`Name: ${req.body.fname} and Age: ${req.body.age}`);
// })

// // app.get("/category/:cname",(req,res)=>{
// //     //read param value
// //     let cn=req.params.cname;
// //     res.send(`The Category is ${cn}`);
// // })

// app.get("/category/:cname([a-z]+)/:scname([a-z]+)?",(req,res)=>{
//     //read param value
//     let cn=req.params.cname;
//     let scn=req.params.scname;
//     if(scn!=undefined)
//     {
//     res.send(`The Category is ${cn} and The Sub-Category is ${scn}`);
//     }
//     else
//     {
//         res.send(`The Category is ${cn}`);
//     }
// })

app.get('*',(req,res)=>{
    res.send('Invalid URL');
})

//define app in the port
app.listen(PORT, (err)=>{
    if (err) throw err;
    console.log (`server working on ${PORT}`);
})