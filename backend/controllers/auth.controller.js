const User= require('../models/User');
const {OAuth2Client}=require('google-auth-library');
const jwt=require('jsonwebtoken');

const client= new OAuth2Client("974608915235-h7p952nn9f000mjmgkud83qv7nm9681c.apps.googleusercontent.com");

const JWTPRIVATEKEY="vcjGffhjsfjUO$%fk&hjdjknlkkrr";

exports.googlelogin=async function(req, res){
    const {tokenId}= req.body;

    client.verifyIdToken({idToken: tokenId, audience: "974608915235-h7p952nn9f000mjmgkud83qv7nm9681c.apps.googleusercontent.com"})
    .then(response=>{
        const {email_verified, name, email}= response.payload;
        if(email_verified){
            User.findOne({email}).exec((err,user)=> {
                if(err){
                    return res.status(400).json({
                        error:'Something went wrong !'
                    })
                }else{
                    if(user){
                        const token=jwt.sign({_id:user._id}, JWTPRIVATEKEY, {expiresIn: '7d'});
                        const{_id,name,email}=user;

                        res.json({
                            token,
                            user:{_id,name,email}
                        })
                    }else{
                        let password = email+JWTPRIVATEKEY;
                        let newUser=new User({name,email,password});
                        newUser.save((err,data)=>{
                            if(err){
                                return res.status(400).json({
                                    error:"Something went wrong !"
                                })
                            }
                        const token=jwt.sign({_id:data._id}, JWTPRIVATEKEY, {expiresIn: '7d'});
                        const{_id,name,email}=newUser;

                        res.json({
                            token,
                            user:{_id,name,email}
                        })
                        })
                    }
                }
            })
        }
    })
    console.log()
};