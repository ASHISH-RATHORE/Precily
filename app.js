const express=require('express');
const userRouter=require('./Routes/userRoutes');
const counterRouter=require('./Routes/counterRoutes');
const  cors = require('cors')
const morgan = require('morgan');

const app=express();

app.use(morgan('dev'))         //for execution time of each request 
app.use(express.json());        
app.use(cors())              
// Route for users
app.use('/api/v1/user',userRouter);      //user data routing
app.use('/api/v1/counter',counterRouter) // counter data routing 
// app.use('*',(req,res)=>{
//     res.send('No Routes Found');
// })

module.exports=app;