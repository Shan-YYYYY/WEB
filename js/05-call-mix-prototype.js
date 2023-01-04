// 原型链加构造函数结合继承
// 利用原型链实现队父类对象的方法继承
// 利用call()借用构造函数同时对父类及原型属性方法进行继承
// 由此方法构造的父类属性和方法既存在子类的实例中又存在子类的原型中


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.setName = function (name) {
    this.name = name;
};

function Student(name, age, price) {
    Person.call(this, name, age);  // 为了得到父类的实例属性和方法
    this.price = price; // 添加子类型私有的属性
}

Student.prototype = new Person();  // 为了得到父类的原型属性和方法
Student.prototype.constructor = Student;// 将子类的原型的构造函数指向子类

Student.prototype.setPrice = function (price) {  // 添加子类私有属性
    this.price = price;
};

var s = new Student("孙悟空", 18, 19000);
console.log(s.name, s.age, s.price);
s.setName("猪八戒");
s.setPrice(12000);
console.log(s.name, s.price);

var date = new Date();
console.log(date);

console.log(date.getFullYear());//获取当前日期对象的年份(四位数字年份)
console.log(date.getMonth());//获取当前日期对象的月份(0 ~ 11)
console.log(date.getDate());//获取当前日期对象的日数(1 ~ 31)
console.log(date.getHours());//获取当前日期对象的小时(0 ~ 23)
console.log(date.getMinutes());//获取当前日期对象的分钟(0 ~ 59)
console.log(date.getSeconds());//获取当前日期对象的秒钟(0 ~ 59)
console.log(date.getMilliseconds());//获取当前日期对象的毫秒(0 ~ 999)
















