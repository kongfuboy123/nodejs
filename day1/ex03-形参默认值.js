//形参默认值
function func(x) {
  console.log(x);
}
func(10);
func();

function func2(x=1) { //跟php一样 
  console.log(x);
}
func2(10);
func2();

// 解构赋值形参默认值

let obj = {
  name : 'tt',
  age: 22
}
function func3({name,age}={}){
  console.log(name,age);
}
func3(obj);//tt 22
func3()//undefined undefined 不报错,如果没有={}则报错


//增添默认值， 跟在形参后面，而不是后面的｛｝里
function func4({name='default',age=11}={}){
  console.log(name,age);
}
func4()//default 11

function func5({name='default',age=11}){
  console.log(name,age);
}
func5()//报错，必须有={}才可以