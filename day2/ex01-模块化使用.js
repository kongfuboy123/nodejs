const m1 = require('./modules/m1')//导入模块，常量名最好跟模块名一致，采用相对路径，模块后缀名 .js 可以不写
console.log(m1);

console.log(m1.sum(1,2));