// function myValidation() {
//     //let myValue = document.querySelector('#myform')
//     let myValue = document.getElementById('myform').value
//     if (isNaN(myValue) || myValue < 1 || myValue > 20) {
//         console.log('Not a valid input');

//     } else {
//         console.log('This input is ok');

//     }
// }

function myValidation() {
    let myValue = document.getElementById('myform').value
    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        //console.log('Not a valid input');
        let myIdone = document.querySelector('#idone')
        myIdone.textContent = `Not a valid input`



    } else {
        let myIdone = document.querySelector('#idone')
        myIdone.textContent = `This input is OK`

    }
}

//form validation

document.querySelector('.myform')
    .addEventListener('submit', (event) => {
        event.preventDefault()
        console.log(event.target.username.value);
        console.log(event.target.realname.value);
        event.target.username.value = '';
        event.target.realname.value = '';
    })