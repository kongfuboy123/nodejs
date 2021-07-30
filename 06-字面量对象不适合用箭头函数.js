// 字面量创建的对象不适合用箭头函数
let obj = {
  name:'tt',
  age:11,
  say:() => console.log(this.name) // this 指向obj 外部，this.name 为undefined
}
obj.say();