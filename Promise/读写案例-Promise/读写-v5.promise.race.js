
//把files文件夹下三个txt文件，使用fs.readFile 顺序读取，组成'我爱node',写入all.txt

const fs = require('fs');
const path = require('path');
const util = require('util');
// 拼接文件路径
let pathFile1 = path.join(__dirname,'files','1.txt');
let pathFile2 = path.join(__dirname,'files','2.txt');
let pathFile3 = path.join(__dirname,'files','3.txt');
let pathFileAll = path.join(__dirname,'files','all.txt');

//使用promisify 替换封装的程序
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

let p1 = readFile(pathFile1,'utf8');
let p2 = readFile(pathFile2,'utf8');
let p3 = readFile(pathFile3,'utf8');
let str = '';
// 使用Promise.race ，[p1,p2,p3]只要有一个完成了，就不再进行其他的了
Promise.race([p1,p2,p3]).then(data => {
  console.log(data);
  // str = data.join('');
  // writeFile(pathFileAll,str);
}).catch(err => {
  console.log(err);
})

