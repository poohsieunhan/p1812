const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    method: ['GET',"POST","PUT","DELETE"],
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",(req,res)=>{
    return res.send("SERVER ONLINE!");
});

const PORT = process.env.PORT || 5000;

const listener = app.listen(PORT,() => {
    console.log('SERVER ONLINE ON PORT: ' + listener.address().port);
});


console.log("test git");