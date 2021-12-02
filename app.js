const express = require("express");
const path = require("path");
const app=express();
const port=8000;



//EXPRESS RELATED
app.use('/static',express.static('static'))
app.use(express.urlencoded())

//PUG RELATED
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

//ENDPOINTS
app.get('/',(req,res)=>{
    
    const params={}
    res.status(200).render('index.pug',params);
})
//Start Server
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);

});