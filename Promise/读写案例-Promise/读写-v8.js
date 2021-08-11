const fs = require('fs').promises;//直接把fs全部promise化
const path = require('path');
const util = require('util');
let pathFile1 = path.join(__dirname,'files','1.txt');
let pathFile2 = path.join(__dirname,'files','2.txt');
let pathFile3 = path.join(__dirname,'files','3.txt');
let pathFileAll = path.join(__dirname,'files','all.txt');


let p1 = fs.readFile(pathFile1,'utf8'); 
let p2 = fs.readFile(pathFile2,'utf8'); 
let p3 = fs.readFile(pathFile3,'utf8'); 

async function readWrite(){
  let [data1,data2,data3] = await Promise.all([p1,p2,p3]);
  
  fs.writeFile(pathFileAll,data1+data2+data3);
}

readWrite();