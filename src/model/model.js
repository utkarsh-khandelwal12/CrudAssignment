const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt =require('bcryptjs');
//const jwt=require('jsonwebtoken');

const userschema=mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique: true,
        lowercase: true,
        validate: value=> {
            if(validator.isEmail(value)){
                throw new Error({error: 'Invalide email'});
            }
        }
    },
    password:{
        type : String,
        required : true,
    }
})

userschema.pre('save', async function(next){
    const user=this
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8);
    }
    console.log('Query executed successfully');
    next();
})

const User=mongoose.model('User',userschema);
module.exports=User;