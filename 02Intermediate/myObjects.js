let myYoutubeVideo1 = {
    title: 'Loops in javascript',
    videoLength: 15,
    videoCreator: 'John Doe',
    videoDescription: 'this is video description and a long one'
}

let myYoutubeVideo2 = {
    title: 'functions in javascript',
    videoLength: 10,
    videoCreator: 'John Doe',
    videoDescription: 'this is video description and a long one'
}

// console.log(myYoutubeVideo);

// console.log(`Hey new Video on ${myYoutubeVideo.title} title by ${myYoutubeVideo.videoCreator}`);



// //Assignment

// let myCourse = {
//     course: 'JavaScript',
//     authername: 'John Doe',
//     price: '799',
//     description: '"This is online JavaScript course"'
// }
// console.log(`Hey there is a new course ${myCourse.course} by auther ${myCourse.authername} at a price rupees ${myCourse.price} and has a description ${myCourse.description}`);

// myYoutubeVideo.title = 'Loops in JS';
// console.log(`Hey new Video on ${myYoutubeVideo.title} title by ${myYoutubeVideo.videoCreator}`);
// console.log(myYoutubeVideo);

let changeVideoLength = function (myObject) {
    //return `Time of this video is: ${myObject.videoLength + 2}`;
    return {
        formatOne: `Time of this video is: ${myObject.videoLength + 2}`,
        formatTwo: `Time of this video is: ${myObject.videoLength + 1}`
    }
}
let adOne = changeVideoLength(myYoutubeVideo2)
console.log(adOne.formatOne);
