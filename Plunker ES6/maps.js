let pikachu = {
    name: 'i am pikachu',
    power: 'I can electrify'
}


let clifary = {
    name: 'i am clifary',
    power: 'I am cute'
}
let charmander = {
    name: 'i am charmander',
    power: 'I throw fire'
}
let pokemon = new Map();

pokemon.set('pika', pikachu)
pokemon.set('cli', clifary)
pokemon.set('char', charmander)
console.log(pokemon.size);
console.log(pokemon.get('char'));
console.log(pokemon.keys());

for (key of pokemon.keys()) {
    console.log(key);

}

for (const val of pokemon) {
    console.log(val);

}