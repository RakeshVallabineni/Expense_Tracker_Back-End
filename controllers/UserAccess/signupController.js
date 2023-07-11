const User=require('../../models/userAccess/user.js')

const Joi=require("joi");

const bcrypt=require('bcrypt');

const saltrounds=parseInt(process.env.SALTROUNDS);

exports.createUser=async (req,res,next)=>{
      try{
        const { firstname, lastname, username, gmail, password }=req.body

        if((firstname!=null, lastname!=null, username!=null, gmail!=null, password!=null) || (firstname!="", lastname!="", username!="", gmail!="", password!="")){
            const findUser=await User.findOne({gmail:gmail});
            const findUserName=await User.findOne({username:username});

            const signupCheck=Joi.object({
                firstname:Joi.string().required(),
                lastname:Joi.string().required(),
                username:Joi.string().required(),
                gmail:Joi.string().email().required(),
                password:Joi.string().required(),
              })
            
            const { error }=signupCheck.validate(req.body);
            if(!error && (findUser===null) &&(findUserName===null)){
                bcrypt.hash(password,saltrounds,async (err,hash)=>{
                    if(!err){
                        const createUserResponse=await new User({
                            firstname:firstname,
                            lastname:lastname,
                            username:username,
                            gmail:gmail,
                            password:hash
                        })
                        if(await createUserResponse.save()){
                            res.status(200).json({message:"saved successfully"});
                        }
                    }
                })
            }
            else{
                res.status(200).json({message:"User exist/Wrong credentials"});
            }
        }
        else{
            res.status(200).json({message:"Please do fill the parameters"});
        }
        
      }
      catch(err){
        res.status(404).json({message:"something went wrong"})
      }
}