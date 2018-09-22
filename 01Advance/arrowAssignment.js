const animals = [{
    title: 'Cat',
    isDone: true
}, {
    title: 'Jet',
    isDone: false
}, {
    title: 'Bat',
    isDone: false
}, {
    title: 'Dog',
    isDone: true
}, {
    title: 'Hat',
    isDone: false
}, {
    title: 'Fox',
    isDone: true
}]

const notAnimals = animals.filter((notDone) => notDone.isDone === false)
notAnimals.forEach((name) => console.log(name.title))




