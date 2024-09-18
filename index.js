require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./db/connection')

const pfServer = express()

pfServer.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
pfServer.use(express.json())
pfServer.use(router)

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`project server started at port :${PORT}`);
})

pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style='color:red;'>project server started, and waiting or client request</h1>`)
})