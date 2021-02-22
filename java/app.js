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
let container = document.getElementById('images_div'); // ths var for 3 img , because we need add enent if the use click for any one 
let maxAttempts = 5;
let userAttempts = 0;
let RightImageIndex;
let MiddleImageIndex;
let leftImageIndex;
let allItemsName = []; //this for chart label
let ItemsVotes = []; //this for chart 
let ItemsShow = []; //this for chart 
let lastSrc1;
let lastSrc2;
let lastSrc3;
let newSrc1;
let newSrc2;
let newSrc3;

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
    ItemsShow.push(Items.allItems[leftImageIndex].shows++)
        // let MiddleImageIndex = randomImgByIndex();
        // let RightImageIndex = randomImgByIndex();
        // we need to check if it the same , it will run one time at lest 
        // in this case the code will     let leftImageIndex = randomImgByIndex();

    // after that run do , after that check while if it is true will run do again and check 
    do {

        RightImageIndex = randomImgByIndex(); // votes
        lastSrc1 = Items.allItems[RightImageIndex].source;

        ItemsShow.push(Items.allItems[RightImageIndex].shows++);
        //            ItemsVotes.push(Items.allItems[i].votes);

        MiddleImageIndex = randomImgByIndex();
        ItemsShow.push(Items.allItems[MiddleImageIndex].shows++)

    }
    while (MiddleImageIndex === RightImageIndex || leftImageIndex === RightImageIndex || leftImageIndex === MiddleImageIndex) {
        lastSrc1 = Items.allItems[MiddleImageIndex].source;
        middleImageItem.src = Items.allItems[MiddleImageIndex].source;


        lastSrc2 = Items.allItems[MiddleImageIndex].source;

        rightImageItem.src = Items.allItems[RightImageIndex].source;
        lastSrc3 = Items.allItems[MiddleImageIndex].source;

        leftImageItem.src = Items.allItems[leftImageIndex].source;

    }
}
randomImgByIndex();
// we need to add event when we click on image
// from var contain id 
container.addEventListener('click', handleUserClick);
// the fun for click 
userAttempts = 0;

function handleUserClick(event) {
    if (userAttempts < maxAttempts) {
        userAttempts++;

        // add void , we will put click img
        if (event.target.id === 'left_image') {
            Items.allItems[leftImageIndex].votes++;
        } else if (event.target.id === 'middle_image') {
            Items.allItems[MiddleImageIndex].votes++;
        } else if (event.target.id === 'right_image') {
            Items.allItems[RightImageIndex].votes++;
        }
        renderThreeImages();
    }
    if (userAttempts == maxAttempts) {
        // //in this case will ended attemps , so the result will show 
        // let listItems = document.getElementById('result_list');
        // //for the images result , use list , for because it 20
        // let getResult;
        // for (let i = 0; i < Items.allItems.length; i++) {
        //     getResult = document.createElement('li');
        //     listItems.appendChild(getResult);
        //     //it will get a neame in li 
        //     getResult.textContent = Items.allItems[i].name + ' has ' + Items.allItems[i].votes + ' votes '
        // }
        container.removeEventListener('click', handleUserClick);
        //show the votes in chart 
        for (let i = 0; i < allItemsName.length; i++) {
            ItemsVotes.push(Items.allItems[i].votes);
        }
        viewChart();
    }

}

renderThreeImages();
newSrc1 = Items.allItems[RightImageIndex].source;

newSrc2 = lastSrc2;
newSrc3 = lastSrc3;

console.log(newSrc1);
console.log(lastSrc1);

/* lab 12 */
function viewChart() {

    let ctx = document.getElementById('myChart').getContext('2d');
    let myBubbleChart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: allItemsName,
            datasets: [{
                    label: 'vote ',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: ItemsVotes,
                },
                {
                    label: 'show ',
                    backgroundColor: 'rgb(144, 163, 198)',
                    borderColor: 'rgb(144, 163, 198)',
                    data: ItemsShow,
                }
            ]
        },

        // Configuration options go here
        options: {}
    });

}

/*this getNameForAllItems for make a array with name items and put it in chart  */
function getNameForAllItems() {
    for (let index = 0; index < Items.allItems.length; index++) {

        allItemsName.push(Items.allItems[index].name);
    }
}
getNameForAllItems();