var express = require('express');


var bodyParser = require('body-parser')

//引入user.js
const user = require('./routes/user');


//引入mongoose
var mongoose = require('mongoose');

//DB config
const db = require('./config/keys').mongoURI

//连接数据库
mongoose.connect(db)
    .then(()=>{
        console.log("monggoDb 数据库连接成功")
    })
    .catch(err=>{
        console.log("monggoDb 数据库连接失败")
    })

var app = express()


//使用中间件使用routes
app.use('/user',user)

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}))    //解决post请求的 x-www-form-urlencoded
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/',function (req,res) {
    res.send("hellow zys express");
})

app.listen(port,()=>{
    console.log(`server is runing on port ${port}`);
})