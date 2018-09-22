let syml1 = Symbol('Batman');
let syml2 = Symbol('Batman');
console.log(syml1 === syml2);
let obj = {
    name: 'Bruce',
    power: 'Detective',
    [syml1]: 2345
}
console.log(obj);

//Use case 1

const M_KEY = Symbol();
let obj1 = {};
obj[M_KEY] = 9876;

//Use Case 2

const COLOR_RED = Symbol('Red');