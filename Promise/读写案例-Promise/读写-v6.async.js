const fs = require('fs');
const path = require('path');
const util = require('util');
let pathFile1 = path.join(__dirname,'files','1.txt');
let pathFile2 = path.join(__dirname,'files','2.txt');
let pathFile3 = path.join(__dirname,'files','3.txt');
let pathFileAll = path.join(__dirname,'files','all.txt');
// 用promisify 将fs.readFile 转为promise 对象，比直接写fs.readFile本身更简洁
let readFilePromise = util.promisify(fs.readFile);
let writeFilePromise = util.promisify(fs.writeFile);
let p1 = readFilePromise(pathFile1,'utf8'); 
let p2 = readFilePromise(pathFile2,'utf8'); 
let p3 = readFilePromise(pathFile3,'utf8'); 
async function readWrite(){
  let data1 = await p1; //await 只能用在async函数中
  let data2 = await p2;
  let data3 = await p3;
  
  console.log(data1+data2+data3);
  writeFilePromise(pathFileAll,data1+data2+data3);
}
readWrite();