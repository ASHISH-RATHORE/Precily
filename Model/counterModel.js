const mongoose=require('mongoose');



const CounterSchema= new mongoose.Schema({
    name:{
        type:String,
        default:"Counter"
        
    },
    counter:{
        type:Number,
    }
});


const Counter=mongoose.model('counter',CounterSchema);
module.exports=Counter;





