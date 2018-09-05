
//login  register

const express = require('express');

const router = express.Router();

const User = require('../models/User')

const bcrypt = require('bcrypt')


//http://localhost:3000/user/test
// 返回请求的json数据
//@access public

router.get('/test',(req,res)=>{
    res.json({msg:"login works"})
})


//http://localhost:3000/user/register
// 返回请求的json数据
//@access public
router.post('/register',(req,res)=>{
    console.log(res.body);

    //查询数据库中是否拥有邮箱
    User.findOne({email:req.body.email})
        .then((user)=>{
            if(user){
                return res.status(400).json({msg:"邮箱已被占用"})
            }else{
                const newUser = new User({
                    name:req.body.name,
                    email:req.body.email,
                    avatar,
                    password:req.body.password
                })

            }
        })
})


module.exports = router;