// 使用构造函数继承 原理使用call()函数
// 缺点只能继承父类的实例属性和方法，不能继承原型的属性和方法
// 无法实现构造函数复用，每个子类都有父类实例函数的副本，影响性能，代码会臃肿

// 定义父类构造函数
function SuperType(name, age) {
    this.name = name;
    this.age = age;
    this.showsupperName = function () {
        console.log(this.name);
    };
    this.showsupperAge = function () {
        console.log(this.age);
    };
}

// 定义子类构造函数
function SubType(name, age) {
    // 在子类中调用父类的call（）方法以继承父类
    SuperType.call(this, name, age);
    this.age = age;
}

// 给子类的原型添加方法
SubType.prototype.showsubName = function () {
    console.log(this.name);

}

// 创建子类对象然后调用
var subtype = new SubType("孙悟空", 20);
subtype.showsubName();
subtype.showsupperName();
console.log(subtype.age);
console.log(subtype.name);
subtype.showsupperAge();
