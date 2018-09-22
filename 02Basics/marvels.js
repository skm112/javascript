// //datatype - Array

// const superHeroes =['Iron Man','SpiderMan','Capt. America','Thor']
// let arrLength = superHeroes.length
// //let last =arrLength-1
// console.log(superHeroes);
// console.log(superHeroes[0]);
// console.log(arrLength);
// //console.log(superHeroes[last]);
// console.log(superHeroes[superHeroes.length-1]);

// //console.log('We have ' + arrLength + ' superheros');

// console.log(`We have super ${arrLength} heroes`);


const numbers = ['One','Two','three','four','five','six']

// numbers[1] = 'Something'
// console.log(numbers);


//start

// console.log(numbers.shift());

// console.log(numbers);

// numbers.unshift('Something')
// console.log(numbers);



//end


// console.log('the element is deleted ' + numbers.pop());
// console.log(numbers);

// numbers.push('Seven')
// console.log(numbers);




//Middle


// numbers.splice(2,1,'Something')
// console.log(numbers);

// numbers.splice(2,2,'Something')
// console.log(numbers);

// numbers.splice(2,1)
// console.log(numbers);

numbers.splice(2,numbers.length-3)
console.log(numbers);
