const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3001;
const userRouter = require('./src/routes/users')
require('dotenv').config();

app.use('/users',userRouter)


app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})