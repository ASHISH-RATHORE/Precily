const User=require('./../Model/UserModel');



exports.AllUserData=async(req,res,next)=>{   //getting all user data stored in DB 
    
    try{
            console.log(req.count)
        const user=await User.find();
        const users=user.map((val)=>{ return { id:val._id, name:val.name,email:val.email,
                                               address:val.address,pincode:val.pincode
                                             }});
        
        
        res.status(201).json({
            status:'Success',
            total:users.length,
            data:
                users
            });

    }catch(err){
              res.status(400).json({
                  status:'Fail',
                  data:err
              })
           }
        };

        exports.UserByIdAndUpdate=async(req,res,next)=>{        //updating user using ID
              const ID= req.params.id;

                    
                const user=await User.findByIdAndUpdate(ID,{
                    $set:{
                        name:req.body.name,
                       email:req.body.email,
                         address:req.body.address,
                         pincode:req.body.pincode

                    }
                }, function (err, docs) {
                    if (err){
                        res.status(401).json({
                            status:'fail',
                            err
                            });
                            console.log(err.code)
                    }
                    else{
                        console.log(docs)
                        res.status(201).json({
                                    status:'Success',
                                    data:
                                        docs
                                    });
                    }});
                
            
                };

                exports.UserById=async(req,res,next)=>{  // finding user by Id
                    const ID= req.params.id;
      
                    console.log(ID)
                  try{
                          
                      const user=await User.findById(ID);
                      
                      res.status(201).json({
                          status:'Success',
                          total:user.length,
                          data:
                              user
                          });
              
                  }catch(err){
                            res.status(400).json({
                                status:'Fail',
                                data:err
                            })
                         }
                      };

exports.AddUser=async(req,res,next)=>{       //adding user into the DB
    
    const {name,email,address,pincode}= req.body
    try{
        const newUser=await User.create({
            name,
            email,
            address,
            pincode
        });
        
        res.status(200).json({
            status:'Success',
            data:newUser,
            
        })
    }catch(error){
        console.log(error.keyPattern)
res.status(409).json({
    status:'Fail',
    data:error.keyPattern
})
    }

}
