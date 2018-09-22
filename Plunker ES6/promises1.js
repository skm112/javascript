// function asynFun() {
//     return new Promise(
//         function (resolve, reject) {
//             resolve(result);
//             reject(error);
//         }

//     )
// }
// /// function calling
// asynFun()
//     .then(result => {
//         888888888
//     })
//     .catch(error => {
//         333333333
//     })

//---------------------------------------------
let myP = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Hurrayyy')
    }, 1000);
});

myP
    .then((v) => console.log(v))
    .catch()