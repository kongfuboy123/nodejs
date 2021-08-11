
//把files文件夹下三个txt文件，使用fs.readFile 顺序读取，组成'我爱node',写入all.txt

const fs = require('fs');
const path = require('path');
// 拼接文件路径
let pathFile1 = path.join(__dirname,'files','1.txt');
let pathFile2 = path.join(__dirname,'files','2.txt');
let pathFile3 = path.join(__dirname,'files','3.txt');
let pathFileAll = path.join(__dirname,'files','all.txt');

// 实际就是把readFile转化成promise对象的过程给封装了
function readFilePromise(filePath) {
  return new Promise((resolve, reject) =>{
    fs.readFile(filePath,'utf8',(err,data) => {
      if(err){
        return reject(err);
      }
      resolve(data);
    })
  })
}
let p1 = readFilePromise(pathFile1);
let p2 = readFilePromise(pathFile2);
let p3 = readFilePromise(pathFile3);


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
}).then(()=>{
  fs.writeFile(pathFileAll,str,'utf8',err=>{
    if(err){
      return err;
    }
    console.log(str);
    console.log('写入成功！');
  }) 
})
