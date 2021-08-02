let num = 10;
function sum(a,b) {
  return a+b;
}
class Animal {
  constructor(){
    console.log('动物')
  }
}
//导出方式1
// exports.num = num;
// exports.sum = sum;
// exports.Animal = Animal;

//第二种方式,集中导出

module.exports = {
  num,   //es6 简写
  sum,   
  Animal
}