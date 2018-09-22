class User {

    constructor(firstname, middlename = '', lastname = '', credit) {
        this.firstname = firstname
        this.middlename = middlename
        this.lastname = lastname
        this.credits = credit


    }

    getFullName() {
        // let fullName = `${this.firstname} ${this.lastname} is my full name`
        // return fullName

        return `${this.firstname} ${this.middlename} ${this.lastname} is my full name`
    }

    editName(newname) {
        const myname = newname.split(' ')
        if (myname.length == 3) {
            this.firstname = myname[0];
            this.middlename = myname[1]
            this.lastname = myname[2];
        } else {
            this.firstname = myname[0];
            this.lastname = myname[1];
            this.middlename = ''
        }
    }

    middleName() {
        return `Middle name is ${this.middlename}`
    }
}

class Teacher extends User {
    constructor(firstname, middlename, lastname, credit, subject) {
        super(firstname, middlename, lastname, credit);
        this.subject = subject

    }
    getFullName() {

        return `${this.firstname} ${this.middlename} ${this.lastname} is my full name and I teach ${this.subject}`
    }

}




const john = new Teacher('John', 'Anderson', 'Maxwell', 34, 'python');
//console.log(john);

console.log(john.getFullName());
john.editName('Jonny Dep')
console.log(john.getFullName());


// const sammy = new User();
// console.log(sammy);