let arrOfObjects = [];

let randomIndexNumberOne;
let randomIndexNumberTwo;
let randomIndexNumberThree;



let firstImage = document.getElementById('imageOne');
let secondImage = document.getElementById('imageTwo');
let thirdImage = document.getElementById('imageThree');


let selectionTimes = 10;
let numberOfClicks = 0;


function images (productName, imagePath){
    this.productName = productName;
    this.imagePath = imagePath;
    this.shown = 0;
    this.votes = 0;

    arrOfObjects.push(this);

}



new images = ('bag', 'img/bag.jpg');
new images = ('banana', 'img/banana.jpg');
new images = ('bathroom', 'img/bathroom.jpg');
new images = ('boots', 'img/boots/jpg');
new images = ('breakfast', 'img/breakfast.jpg');
new images = ('bubblegum', 'img/bubblegum.jpg');
new images = ('chair', 'img/chair.jpg');
new images = ('cthulhu', 'img/cthulhu.jpg');
new images = ('dog-duck', 'img/dog-duck.jpg');
new images = ('dragon', 'img/dragon.jpg');
new images = ('pen', 'img/pen.jpg');
new images = ('pet-sweep', 'img/pet-sweep.jpg');
new images = ('scissors', 'img/scissors.jpg');
new images = ('shark', 'img/shark.jpg');
new images = ('sweep', 'img/sweep.png');
new images = ('tauntaun', 'img/tauntaun.jpg');
new images = ('unicorn', 'img/unicorn.jpg');
new images = ('usb', 'img/usb.gif');
new images = ('water-can', 'img/water-can.jpg');
new images = ('wine-glass', 'img/wine-glass.jpg');


function randomNumber (){

    let randomValue = Math.floor(arrOfObjects.length * Math.random());

    return randomValue;

}





function generateAndDisplay (){
    randomIndexNumberOne = randomNumber();
    randomIndexNumberTwo = randomNumber();
    randomIndexNumberThree = randomNumber();

if (randomIndexNumberOne === randomIndexNumberTwo){
    randomIndexNumberOne = randomNumber
}
else if (randomIndexNumberOne === randomIndexNumberThree){
    randomIndexNumberOne = randomNumber
}
else if ( randomIndexNumberTwo === randomIndexNumberThree){
    randomIndexNumberTwo
}


    // imageOne = imagePath + randomIndexNumberOne;
    firstImage.src = arrOfObjects[randomIndexNumberOne].imagePath;
    secondImage.setAttribute('src', arrOfObjects[randomIndexNumberTwo].imagePath);
    thirdImage.setAttribute('src', arrOfObjects[randomIndexNumberTwo].imagePath);


}

generateAndDisplay();

firstImage.addEventListener('click', clicking);
secondImage.addEventListener('click', clicking);
thirdImage.addEventListener('click', clicking);


function clicking(event){

    numberOfClicks++;

    if(numberOfClicks <= selectionTimes){

        if(event.target.id === 'imageOne'){
            arrOfObjects[randomIndexNumberOne].votes++;
        }else if (event.target.id === 'imageTwo'){
            arrOfObjects[randomIndexNumberTwo].votes++;
        }else if (event.target.id === 'imageThree'){
            arrOfObjects[randomIndexNumberThree].votes++;
        }

        
    generateAndDisplay();


    }

    else {
        createList();
        firstImage.removeEventListener('click', clicking);
        secondImage.removeEventListener('click', clicking);
        thirdImage.removeEventListener('click', clicking);
    }
   
}

function createList(){
    
}
