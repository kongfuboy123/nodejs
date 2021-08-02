//需求：把testFile目录下所有js文件前缀[day2]都去掉

const fs = require('fs');
const path = require('path');

 // 获取testFile目录下所有文件
const filePath = path.join(__dirname,'testFile');
const nameList = fs.readdirSync(filePath); //得到目录下所有文件，类型为array

//遍历目录下所有文件
nameList.forEach(item => {
 //拼接文件改名前路径
const oldPath = path.join(filePath,item);

//拼接文件改名后路径,substring(a,b)从字符下标a取到b，substring(a)从a取到最后
let start = '[day2]';//前缀
const newPath = path.join(filePath,item.substring(start.length));
  if(item.endsWith('.js')){ //判断文件名是否.js结尾
    fs.renameSync(oldPath,newPath);
  }
})
