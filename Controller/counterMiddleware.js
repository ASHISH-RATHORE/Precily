const Counter=require('../Model/counterModel');


exports.Count=async(req,res,next)=>{       // getting counter from the Db
  console.log("object")
  try{
     const data= await Counter.findById("60d91d0686f6931af07bef98");

     res.status(201).json({
       status:'Success',
       data:{
          counter:data.counter}
       });
       next(); 
  }catch(err){
         console.log(err)
         res.status(400).json({
             status:'Fail',
             data:err
         })
      }        
     
          
        };

exports.counter=async(req,res,next)=>{      //updating counter on  req


       await Counter.findByIdAndUpdate("60d91d0686f6931af07bef98",{ $inc: { counter:1 }},{new:true}).then((err, counter)=>{
          console.log(err)

       })
              
       next();    
        };
