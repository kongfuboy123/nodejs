function func(a,b,...rest) { // ... 收集剩余实参到rest
  console.log(a,b);
  console.log(rest); //打印出来是个数组，[3, 4, 5, 6,7, 8, 9]
  console.log(typeof(rest));//但实际是个对象
}

func(1,2,3,4,5,6,7,8,9);

function func1(...rest) { // ... 收集全部实参到rest
  
  console.log(rest); 
  
}
func1(1,2,3,4,5,6,7,8,9);

//三点运算符解构数组
let arr1 = [1,2,3];
console.log(arr1);//[ 1, 2, 3 ]
console.log(...arr1);// 1 2 3

// 
let arr2 = [4,5,6];

function func2(a,b,c) {
  console.log(a,b,c);
}
func2(...arr2);//在函数中的应用，直接将数组中的数字，解构为实参

// 合并数组
let newArr = [...arr1,...arr2];
console.log(newArr);//[ 1, 2, 3, 4, 5, 6 ]
//合并对象

let obj1 = {
  name:'tt',
  age:11
}
let obj2 = {
  phone: 12334556
}
let newObj = {...obj1,...obj2};// 等效于 let newObj = Object.assign({},obj1,obj2)
console.log(newObj);//{ name: 'tt', age: 11, phone: 12334556 }