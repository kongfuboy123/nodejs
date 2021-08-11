
//把files文件夹下三个txt文件，使用fs.readFile 顺序读取，组成'我爱node',写入all.txt

const fs = require('fs');
const path = require('path');
const util = require('util');
// 拼接文件路径
let pathFile1 = path.join(__dirname,'files','1.txt');
let pathFile2 = path.join(__dirname,'files','2.txt');
let pathFile3 = path.join(__dirname,'files','3.txt');
let pathFileAll = path.join(__dirname,'files','all.txt');

//使用promisify 替代封装过程，直接生成promise对象
let readFilePromise = util.promisify(fs.readFile);
let writeFilePromise = util.promisify(fs.writeFile);
// function readFile(filePath) {
//   return new Promise((resolve, reject) =>{
//     fs.readFile(filePath,'utf8',(err,data) => {
//       if(err){
//         return reject(err);
//       }
//       resolve(data);
//     })
//   })
// }
let p1 = readFile(pathFile1);
let p2 = readFile(pathFile2);
let p3 = readFile(pathFile3);
let str = '';
p1.then(data =>{
  str += data;
  return p2;
}).then( data => {
  str += data;
  return p3;
}).then( data =>{
  str += data;
  // console.log(str);
  writeFile(pathFileAll,str);
  console.log('写入成功');
})
