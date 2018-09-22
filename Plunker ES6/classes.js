class Marvel {

    constructor(name) {
        this.name = name;
    }

    superpower(power) {
        this.power = power
        console.log('Here is your superpower ' + this.power);

    }
}

let superman = new Marvel('Kent');
superman.superpower('SuperHuman');
console.log(superman.name);

let Batman = new Marvel('Bruce');
Batman.superpower('Money');
console.log(Batman.name);