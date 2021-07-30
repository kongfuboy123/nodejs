//箭头函数
let func = ()=>{  //let func = function (){}
  console.log('箭头函数');
}
func();

// 如果只有一个形参，且没有默认值，小括号可以省略
let func1 = x  => {
  console.log(x);
}
func1(10);
// 如果函数体只有一个语句，大括号可以省略
let func2 = x => console.log(x);
func2(20);

// 大括号省略时，默认return => 后的值
let func3 = () => 99+1;
let ret = func3();
console.log(ret)//100