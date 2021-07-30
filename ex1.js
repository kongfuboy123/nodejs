//解构对象
let obj = {
  name : 'tt',
  age: 11
}
let {name,age} = obj;
console.log(name,age);
// 解构数组
let arr1 = [1,2,3];
let [a,b,c] = arr1;
console.log(a,b,c);
//部分解构

let [,e,f] = arr1;
console.log(e,f); 
