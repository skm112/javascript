//set only store unique value

let marvel = new Set(['Batman', 'Flash', 'Batman']);
marvel.add('Superman')
marvel.add('Superman')
marvel.add('Superman')
console.log(marvel);
for (const m of marvel) {
    console.log(m);

}

console.log(marvel.has('Flash'));
console.log(marvel.has('Hulk'));