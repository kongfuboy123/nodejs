// 初始化项目 yarn init -y
// 安装 express yarn add express
const fs = require('fs');
const path = require('path');
const util = require('util');


// 1.引入 express 跟 bodyParser
const express = require('express');
const bodyParser = require('body-parser');
// 2.创建app项目对象,设置端口,把bodyParser注册到app下
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
//4.处理请求
app.get('/', (req, res) =>{
  console.log('测试输出');
  res.send('Hello World');
})
app.get('/login', (req, res) =>{
  let filePath = path.join(__dirname, 'views','login.html');
  let readFilePromise = util.promisify(fs.readFile);
  let p = readFilePromise(filePath, 'utf-8');
  p.then(data => {res.send(data)})
})
app.post('/login', (req, res)=>{
  console.log(req.body);
  res.send(`Welcome,${req.body.id}`);
  // res.send('Welcome')
})

// 3.监听端口
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
} )