// 原型链继承

// 定义父类构造函数
function SupperTypr() {
    this.supProp = 'Suppper property';

}

// 给父类的原型 添加方法
SupperTypr.prototype.showSupperProp = function () {
    console.log(this.supProp);

}

// 定义子类构造函数
function SubType() {
    this.subProp = 'Sub property';

}

// 创建父类的对象赋值给子类的原型
SubType.prototype = new SupperTypr();

// 将子类原型的构造函数设为子类
SubType.prototype.constructor = SubType;

// 给子类原型添加方法
SubType.prototype.showSubProp = function () {
    console.log(this.subProp)
}


// 创建子类对象  可以调用父类方法
var subType = new SubType();
subType.showSupperProp();
subType.showSubProp();

























