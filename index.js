const express = require('express');
//const cors = require('cors');
import cors from 'cors';

require('dotenv').config();
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

const PORT = process.env.PORT || 5000;

const listener = app.listen(PORT,() => {
    console.log('SERVER ONLINE ON PORT: ' + listener.address().port);
});


console.log("test git");