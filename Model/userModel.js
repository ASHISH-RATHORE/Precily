const mongoose=require('mongoose');
const validator=require('validator');



const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A must have a name']
    },
    email:{
        type:String,
        required:[true,'A user must have a email'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'Not an email']

    },
    address:{
        type:String,
        required:[true,'A user must have a email']
    },
    pincode:{
        type:Number,
        required:[true,'A user must have a pincode'],
        minlength:6,
    },
});


const User=mongoose.model('Users',userSchema);
module.exports=User;





