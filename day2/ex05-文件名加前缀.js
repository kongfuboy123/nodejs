//需求：把testFile目录下所有js文件都添加一个前缀[day2]
const fs = require('fs');
const path = require('path');

 // 获取testFile目录下所有文件
 const filePath = path.join(__dirname,'testFile');
 const nameList = fs.readdirSync(filePath); //得到目录下所有文件，类型为array
 console.log(nameList);//[ '01.js', '02.js', '03.js', '04.txt', '05.py' ]
//遍历目录下所有文件
nameList.forEach(item => {
 
  if(item.endsWith('.js')){ //判断文件名是否.js结尾
    // fs.renameSync(item,`[day2]${item}`); //参数不是文件名，而是路径
    
    const oldPath = path.join(filePath,item);//拼接旧文件路径
    
    const newPath = path.join(filePath,`[day2]${item}`); //拼接新文件名路径
    
    fs.renameSync(oldPath,newPath);
  }
})
