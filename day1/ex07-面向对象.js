class Animal{
  constructor(name){
    console.log('constructor');//只要 new 了新对象，就会立即执行
    this.name = name;
  }
  showName(){
    console.log(`${this.name}`)
  }
  //静态方法，类直接调用
  static eat(){
    console.log('吃');
  }
}

// let dog = new Animal('dudu');
// dog.showName();
// Animal.eat()

// 继承
class Cat extends Animal{
  constructor(name){ //相当于子类重新constructor
    super(name); //先写super，调用父类方法,如果父类constructor方法需要传参，则supuer也要
    this.age = 10;

  }
  catchMouse (){
    console.log('抓老鼠');
  }


}``
let cat = new Cat('Tom');
cat.showName();//直接继承父类方法
Cat.eat();// 子类直接继承 父类静态方法
cat.catchMouse(); 
