function createPerson(name, age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;

    obj.sayname = function () {
        alert(this.name);
    };

    return obj;


}

var person1 = createPerson("孙悟空", 178);
var person2 = createPerson("猪八戒", 342);
var person3 = createPerson("沙和尚", 323);

console.log(person1);
console.log(person2);
console.log(person3);

alert(person1);
alert(person2);
alert(person3);


