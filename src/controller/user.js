const Userlogin=require('../model/model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const compare = require('bcryptjs');

module.exports={
        create: function(req,res,next){
            Userlogin.create({  email: req.body.email, password: req.body.password }, function (err, result) {
                if (err)
                    next(err);
                else
                    res.json({ status: "success", message: "User added successfully!!!", data: null });
    
            });
        },
        authenticate:function(req,res,next){
            Userlogin.findOne({email:req.body.email}), function (err, userInfo){
                if(err)
                    next(err);
                else
                {
                    if(bcrypt.compareSync(req.body.password,userInfo.password)){
                        const token=jwt.sign({ id: userInfo._id }, process.env.JWT_KEY, { expiresIn: '1h' });
                        res.json({status:"SUccess", message: "Loged in", data:{user:userInfo, token:token}});
                    }
                    else{
                        res.json({status:"Failure", message:"Invalide credentials",data:null});
                    }
                }
        }
    }
}
