
//把files文件夹下三个txt文件，使用fs.readFile 顺序读取，组成'我爱node',写入all.txt

const fs = require('fs');
const path = require('path');

let pathFile1 = path.join(__dirname,'files','1.txt');

fs.readFile(pathFile1,'utf8',(err,data) => {
  if(err){
    return console.log(err);
  }
  console.log(data);
})