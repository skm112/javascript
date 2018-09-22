//document.title = 'I got changed'

//console.log(document.getElementById('idone'));
//console.log(document.getElementsByClassName(''))

//better way to selecting elements

// const myElement = document.querySelectorAll('.classone')
// console.log(myElement);

//console.log(myElement[1]);

// const myPElements = document.querySelector('p')
// console.log(myPElements);
// myPElements.textContent = 'I am being changed using js'


// const myPElements = document.querySelectorAll('p')
// myPElements.forEach((p) =>
//     p.textContent = 'I am changed using loop in js')


//create new element
const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'
document.querySelector('body').appendChild(myNewPara)

// const myNewPara = document.createElement('button')
// myNewPara.textContent = 'mybtn'
// myNewPara.className = 'my'
// myNewPara.style.background = 'cyan'
// document.querySelector('body').appendChild(myNewPara)

//event listioner
document.querySelector('button').addEventListener('dblclick', (event) => {
    //console.log(event.target.textContent);
    console.log(event.target.textContent = 'I was clicked');


})


//track input form

// document.querySelector('#myform').addEventListener('change', (event) => {
//     console.log(event.target.value);

// })

// document.querySelector('#myform').addEventListener('input', (event) => {
//     console.log(event.target.value);

// })