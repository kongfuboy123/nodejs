const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,'fsTest.txt');

//同步读取
// const content = fs.readFileSync(filePath).toString();//转换二进制代码to string格式
const content = fs.readFileSync(filePath,'utf8')//直接转utf-8格式，utf8，utf-8都能用
console.log(content);
console.log('end');
console.log('________________');
// 异步读取
fs.readFile(filePath,'utf8',(err,data) => { //箭头函数快捷键 an
  if(err){
    return console.log(err);
  } 
  console.log(data);
})
console.log('end');
console.log('________________');
//异步写入

fs.writeFile(filePath,'write test','utf8',(err) => { //覆盖原有内容
  if(err){
    return console.log(err);
  }
  console.log('write end');
});


