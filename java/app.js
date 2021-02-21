'use strict'
//we need pic with votes , so we put the prop, as project 
// push arrays for all images (new project )to listed 
// show 3  pic randomly  for index ,must be defirrent pic ,
/* Create a constructor function that creates an object associated with each product, and has the following properties:

Name of the product
File path of image
Times the image has been shown*/

let leftImageItem = document.getElementById('left_image');
let middleImageItem = document.getElementById('middle_image');
let rightImageItem = document.getElementById('right_image');
let maxAttempts = 25;
let userAttempts = 0;
let RightImageIndex;
let MiddleImageIndex;
let leftImageIndex;
// it will go with id 
function Items(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shows = 0; // this var for haw many tims the items show 
    // we need push every thing in an array , we can make it global or in object or add it outside obj
    Items.allItems.push(this);
}
Items.allItems = [];
// add arrays outside obj , we will take random index from it 

// we don't need it as var ,  make new obj and we will get it from arrays directly
new Items('bag', 'img/bag.jpg'); //0
new Items('banana', 'img/banana.jpg'); //2
new Items('bathroom', 'img/bathroom.jpg'); //2
new Items('boots', 'img/boots.jpg'); //0
new Items('breakfast', 'img/breakfast.jpg'); //0
new Items('bubblegum', 'img/bubblegum.jpg'); //0
new Items('chair', 'img/chair.jpg'); //0
new Items('cthulhu', 'img/cthulhu.jpg'); //0
new Items('dog-duck', 'img/dog-duck.jpg'); //0
new Items('dragon', 'img/dragon.jpg'); //0
new Items('pen', 'img/pen.jpg'); //0
new Items('pet-sweep', 'img/pet-sweep.jpg'); //11
new Items('scissors', 'img/scissors.jpg'); //0
new Items('shark', 'img/shark.jpg'); //0
new Items('sweep', 'img/sweep.png'); //0
new Items('tauntaun', 'img/tauntaun.jpg'); //0
new Items('unicorn', 'img/unicorn.jpg'); //0
new Items('usb', 'img/usb.gif'); //0
new Items('water-can', 'img/water-can.jpg'); //0
new Items('wine-glass', 'img/wine-glass.jpg'); //19
//console.log(Items.allItems);
// naw we need random func
function randomImgByIndex() {
    return Math.floor(Math.random() * Items.allItems.length);
}
//console.log(Math.floor(Math.random() * Items.allItems.length));

function renderThreeImages() {
    leftImageIndex = randomImgByIndex();


    // let MiddleImageIndex = randomImgByIndex();
    // let RightImageIndex = randomImgByIndex();
    // we need to check if it the same , it will run one time at lest 
    // in this case the code will     let leftImageIndex = randomImgByIndex();
    // after that run do , after that check while if it is true will run do again and check 
    do {
        RightImageIndex = randomImgByIndex();
        MiddleImageIndex = randomImgByIndex();
    }
    while (MiddleImageIndex === RightImageIndex || leftImageIndex === RightImageIndex || leftImageIndex === MiddleImageIndex) {
        middleImageItem.src = Items.allItems[MiddleImageIndex].source;
        rightImageItem.src = Items.allItems[RightImageIndex].source;
        leftImageItem.src = Items.allItems[leftImageIndex].source;

    }
}
randomImgByIndex();
renderThreeImages();
// we need to add event when we click on image
// from var contain id 
leftImageItem.addEventListener('click', handleUserClick);
middleImageItem.addEventListener('click', handleUserClick);
rightImageItem.addEventListener('click', handleUserClick);


// the fun for click 
function handleUserClick(event) {
    userAttempts++;

    // give it 25 to click and after show result 
    if (userAttempts < maxAttempts) {
        // add void 
        if (event.target.id === 'left_image') {
            Items.allItems[leftImageIndex].votes++;

        } else if (event.target.id === 'middle_image') {
            Items.allItems[MiddleImageIndex].votes++;

        } else {

            Items.allItems[leftImageIndex].votes++;
        }
    } else {
        // will be work after 25 attemps, show the result 
        let list = document.getElementById('result_list');

    }
}