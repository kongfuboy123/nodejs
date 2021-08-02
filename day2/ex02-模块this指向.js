


console.log(exports);// {}空对象 ，模块导出的对象，此时为空
console.log(module.exports);//{}
console.log(exports === module.exports);//true
// 导出的过程就是给exports对象添加属性或者方法,
// exports 是 module.exports 的引用，指向同一个地址，文件才有exports,交互模式下没有
let num = 10;
exports.num = num;
console.log(exports);//  { num: 10 }
console.log(module.exports);// { num: 10 }
console.log('-----------------------');
// this 的指向
console.log(this === exports); //true, 在js文件中，this指向模块导出的对象module.exports
console.log(this);//{ num: 10 }
//在交互模式下， this 指向 global
