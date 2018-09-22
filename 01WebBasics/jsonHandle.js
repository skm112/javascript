const student = {
    name: 'john',
    age: 23,
    isActive: true
}

//convert this object into a string to be stored in local storage

const studentObjToString = JSON.stringify(student);
console.log(typeof studentObjToString);
//localStorage.setItem('student', studentObjToString)

//grab json string and convert back into json item

const toJSONstudent = JSON.parse(studentObjToString);
console.log(typeof toJSONstudent);

//now we can apply all the properties of object in it
let obj = toJSONstudent.name
console.log(obj);