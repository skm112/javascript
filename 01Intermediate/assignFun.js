// let testGrade = function (currentMarks = null, totalMarks = null) {
//     let percent = (currentMarks * 100) / totalMarks;
//     if (percent >= 90) {
//         console.log('Grade: A');
//     } else if (percent >= 80) {
//         console.log('Grade: B');
//     } else if (percent >= 70) {
//         console.log('Grade: C');

//     } else if (percent >= 60) {
//         console.log('Grade: D');

//     } else if (percent >= 50) {
//         console.log('Grade: E');

//     } else if (percent >= 0) {
//         console.log('FAIL');

//     } else {
//         console.log('Obtained or Total marks undefined\nOtherwise both are undefined');

//     }
// }

// testGrade(0, 100);


let getMyGrade = function (current, total) {
    let percent = (current / total) * 100;
    let myGrade = ''

    if (percent >= 90) {
        myGrade = 'A';
    } else if (percent >= 80) {
        myGrade = 'B';
    } else if (percent >= 70) {
        myGrade = 'C';
    } else if (percent >= 60) {
        myGrade = 'D';
    } else if (percent >= 50) {
        myGrade = 'E';
    } else {
        myGrade = 'F (FAIL)'
    }
    return `Your grade is ${myGrade} and percentage is ${percent}`
}
let yourResult = getMyGrade(345, 550)
console.log(yourResult);
