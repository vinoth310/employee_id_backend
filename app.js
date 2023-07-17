const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
var path = require('path');
const app = express();
const {con} = require('./db.js');
const {readdirSync} = require('fs');
require('dotenv').config();


// Applying Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
// Ending Middleware
app.use(express.static(path.join(__dirname, 'public')));



const port = process.env.PORT;

readdirSync('./routers').map((r)=>app.use("/api",require(`./routers/${r}`)));

// console.log("database --> ",con);

app.listen(port,()=>{
    console.log(`Server is runing on port http://localhost:${port}`);
});