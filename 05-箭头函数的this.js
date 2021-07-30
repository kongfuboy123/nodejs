function People(name,age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(this.name);// this指向new出来的对象，p1
    that = this;
    setTimeout(function(){ //设置一个定时器
      console.log(this.name);//this 指向定时器，所以this.name 为 undifined，解决方案为用变量保存this
      console.log(that.name); //that 指向new出来的对象，p1
    },1000)
  }
}

let p1 = new People('tt',11);
p1.say();

// 用箭头函数，解决this指向问题，简化代码
function People2(name,age) {
  this.name = name;
  this.age = age;
  this.say = function () {   
    setTimeout(()=>{ //设置一个定时器,函数改为箭头函数写法
      console.log(this.name);//箭头函数没有自己的作用域，作用域和外层相同，this不指向定时器而是指向定时器外部 
    },1000)
  }
}

let p2 = new People2('xx',22);
p2.say();

