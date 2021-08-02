// path 内置模块
const path = require('path');

//__dirname 得到当年执行文件的绝对路径，不包括文件名
console.log(__dirname);//d:\LearnJS\learn node\nodejs\day2
//__filename 包括文件名
console.log(__filename);//d:\LearnJS\learn node\nodejs\day2\ex03-内置模块.js

//extname 获取扩展名，即后缀
let extname = path.extname(__filename);
console.log(extname);
//basename 获取整个文件名
let basename = path.basename(__filename);
console.log(basename);
// dirname
let dirname = path.dirname(__filename);
console.log(dirname);
//parse 获取根目录路径，文件路径，文件名，扩展名
let parseObj = path.parse(__filename)
console.log(parseObj)

// 拼接操作 path.join()
let fullPath = path.join(dirname,basename)
console.log(fullPath);//d:\LearnJS\learn node\nodejs\day2\ex03-内置模块.js
let fullPath2 = path.join(dirname,'modules','m1.js') //每层目录，就是一个参数
console.log(fullPath2);//d:\LearnJS\learn node\nodejs\day2\modules\m1.js

