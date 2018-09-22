localStorage.setItem('hero', 'thor')
localStorage.setItem('todo', 'buy tea')
var myHero = localStorage.getItem('hero')
console.log(myHero);
console.log(localStorage.getItem('todo'));

localStorage.setItem('todo', 'record youtube videos')
console.log(localStorage.getItem('todo'));

// localStorage.removeItem('hero')
localStorage.clear()

var myHero = localStorage.getItem('hero')
console.log(myHero);