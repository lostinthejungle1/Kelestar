const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const userRoutes = require('./src/routes/users')
require('dotenv').config();

app.use(userRoutes)

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})