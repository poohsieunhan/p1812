//const express = require('express');
require('dotenv').config();
import express from 'express';
//const cors = require('cors');
import cors from 'cors';



const initRoutes = require("./src/routes");
require('./connection_database');

const app = express();


app.use(cors({
    origin: process.env.CLIENT_URL,
    method: ['GET',"POST","PUT","DELETE"],
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

initRoutes(app);

const _port = process.env.PORT//|| 5000;
console.log(`port: ${_port}`)

const listener = app.listen(_port,() => {
    console.log(`SERVER ONLINE ON PORT: ${_port}`);
});


//console.log("test git");