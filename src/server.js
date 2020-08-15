const express= require('express');
const app=express();
const port=process.env.PORT; 
const User=require('./routes/route');
const student=require('./routes/routestudent');
const bodyParser= require('body-parser');
const jwt=require('jsonwebtoken');
require('./db/db');

//const mongoose=require('mongoose');

app.use(bodyParser.json());

app.use('/users',User);

app.use('/Students',validateuser,student);

function validateuser(req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, process.env.JWT_KEY)
        if(!data) {
            throw new Error()
        }
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
}

app.listen(port, ()=>{
    console.log(`${port} is running`);
})