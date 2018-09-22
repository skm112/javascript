// const sayHello = function (name) {
//     return "Hey there, " + name + " !"
// }

// console.log(sayHello('Sammy'));


// //Arrow function
// const sayHello = (name) => `hey there ${name} !`
// console.log(sayHello('Sammy'));


const todos = [{
    title: 'Buy bread',
    isDone: true
}, {
    title: 'Go to gym',
    isDone: true
}, {
    title: 'Record utube video',
    isDone: false
}]

const thingsDone = todos.filter((todo) => todo.isDone === true)

//console.log(thingsDone);

const cameras = {
    price: 600,
    weight: 2000,
    myDes: function () {
        return `This canon camera is of ${this.price}$`
    }
    // myDes: () => {
    //     return `This canon camera is of ${this.price}$`
    // }
}

console.log(cameras.myDes());

//this is only for redux people
//const func = () => ({ key: 'vslue' })

