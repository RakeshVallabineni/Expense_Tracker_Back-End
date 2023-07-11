const bcrypt=require('bcrypt');
const User=require('../../models/userAccess/user.js');
const jwt=require('jsonwebtoken');
const Token_Secret=process.env.TOKEN_SECRET;
const Joi=require("joi");

exports.checkUser=async (req,res,next)=>{
    try{
        const { gmail, password }=req.body;
        const userPassword=await User.findOne({gmail:gmail});
        const loginCheck=Joi.object({
            gmail:Joi.string().email().required(),
            password:Joi.string()
        })
        
        const { error }=loginCheck.validate(req.body);
        const findUserName=await User.findOne({username:gmail});
        if(userPassword && !error){
            const checkCredentialsResponse=await bcrypt.compare(password,userPassword.password);
            const username=userPassword.lastname+" "+userPassword.firstname;
            if(checkCredentialsResponse){
                const loginToken=jwt.sign(userPassword.id,Token_Secret);
                res.status(200).json({message:"login successfully",TOKEN:loginToken,UserName:username});
            }
            else{
                res.status(404).json({message:"wrong credentials"});
            }
            
        }
        if(findUserName && error){
            const checkCredentialsResponse=await bcrypt.compare(password,findUserName.password);
            const username=findUserName.lastname+" "+findUserName.firstname;
            if(checkCredentialsResponse){
                const loginToken=jwt.sign(findUserName.id,Token_Secret);
                res.status(200).json({message:"login successfully",TOKEN:loginToken,UserName:username});
            }
            else{
                res.status(404).json({message:"wrong credentials"});
            }
            
        }
        
    }
    catch(err){
        res.status(404).json({message:"something went wrong"});
    }
}