const Userlogin=require('../model/student');
const { create } = require('../model/student');

module.exports={
    getAll: function(req,res,next){
        let studentlist=[];
        Userlogin.find({},function(err,students){
            if(err)
                next(err);
            else{
                for(let student of students){
                    studentlist.push({id: student.id, firstname: student.FirstName, lastname: student.LastName, age: student.Age, college: student.College, yearofjoiningbatch: student.Yearofjoining });
                }
                res.json({ status: "success", message: "Listings found!!!", data: { students: studentlist } });
            }
        });
    },
    create:function(req,res,next){
        Userlogin.create({FirstName: req.body.FirstName, LastName: req.body.LastName, Age: req.body.Age, College: req.body.College, Yearofjoining: req.body.Yearofjoining}, function(err,r){
            if(err)
                next(err);
            else
                res.json({status:"Success", message:"User added", data:null});
        })
    },
    getById:function(req,res,next){
        Userlogin.find(req.params.id,function(err,result){
            if(err)
                next(null);
            else{
                res.json({ status: "success", message: "Student found!!!", data: {students:result} });
            }
        })
    },
    updateById:function(req,res,next){
        Userlogin.findByIdAndUpdate(req.params.id,{FirstName: req.body.FirstName, LastName: req.body.LastName, Age: req.body.Age, College: req.body.College, Yearofjoining: req.body.Yearofjoining},function(err,result){
            if(err)
                next(err);
            else
                res.json({status:"Success", message:"User Update", data:null});
        })
    },
    deleteById:function(req,res,next){
        Userlogin.findByIdAndRemove(req.params.id,function(err,result){
            if(err)
                next(err)
            else
                res.json({status:"Success", message:"User deleted",data:null})
        })
    }
}