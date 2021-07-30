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
//部分解构，数组需要位置对应，不如直接使用索引

let [,e,f] = arr1;
console.log(e,f); 
console.log(arr1[1],arr1[2])
//字符串解构
let str1 = 'hello';
let [g,h,l] = str1;
console.log(g,h,l);