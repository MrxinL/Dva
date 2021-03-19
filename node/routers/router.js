const experss =require('express');
const { Route } = require('react-router');
const Router =experss.Router();

let OptPool =require('../model/Optpool.js')
  //创建线程池
  let optpool = new OptPool();

  let pool = optpool.getPool();

  //解决跨域
  Router.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');//允许所有源
    res.header('Access-Control-Allow-Methods','OPTIONS,PATCH,PUT,GET,PUT,DELETE');//复杂请求  简单请求
    res.header('Access-Control-Allow-Headers','Content-type,authorization');//添加请求头
    res.header('Access-Control-Allow-Credentials',true);//是否将请求暴露给网页
    next();
  });

  //登录接口

  Router.post('/bp/login', (req,res) => {
      res.json({
        message: '我是登录'
      })
    
  })

  module.exports = Router;
