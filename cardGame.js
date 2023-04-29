// new game 
const cardArray = [
    {
        name:'kohli',
        img:'/images/vk.jpeg'
    },

    {
        name:'kohli',
        img:'/images/vk.jpeg'
    },
    
    {
        name:'msd',
        img:'/images/msd.jpeg'
    },
    
    {
        name:'msd',
        img:'/images/msd.jpeg'
    },
    
    {
        name:'mithali',
        img:'/images/mraj.jpeg'
    },
    
    {
        name:'mithali',
        img:'/images/mraj.jpeg'
    },
    
    {
        name:'smriti',
        img:'/images/smriti.jpeg'
    },
    
    {
        name:'smriti',
        img:'/images/smriti.jpeg'
    },
    
    {
        name:'zaheer',
        img:'/images/zaheer.jpeg'
    },
    
    {
        name:'zaheer',
        img:'/images/zaheer.jpeg'
    },
    
    {
        name:'kumble',
        img:'/images/kumble.jpeg'
    },
    
    {
        name:'kumble',
        img:'/images/kumble.jpeg'
    },
]

cardArray.sort(()=> 0.5-Math.random());

const game2 = document.querySelector('.game2');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
const resultDisplay = document.getElementById('result');

//creating a game board
function gameBoard(){
   console.log('inside game board');
    for(let i=0;i<cardArray.length;i++){
        var card = document.createElement('img');
        card.classList.add('imgGame')
        card.setAttribute('src','/images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipcard);
        game2.appendChild(card);
    }
}

//function to check for a match on the cards

function checkForMatch(){
    var cards = document.querySelectorAll('.imgGame');
    console.log(cards);
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if(cardsChosen[0] === cardsChosen[1]){
        alert("You have got a match");
        cards[optionOneId].setAttribute('src','/images/white.jpeg');
        cards[optionTwoId].setAttribute('src','/images/white.jpeg');
        cardsWon.push(cardsChosen);

    } else{

        alert("Sorry! Try again!");
        cards[optionOneId].setAttribute('src','/images/blank.png');
        cards[optionTwoId].setAttribute('src','/images/blank.png');
        

    }
    cardsChosen=[];
    cardsChosenId=[];
    resultDisplay.textContent = cardsWon.length;

    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = "Congratulations! You got them all! 10% discount for you! YAY!!!!";
    }

}

//fuction to flip the card on clicking
function flipcard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);

    if(cardsChosen.length == 2){
        setTimeout(checkForMatch, 500);
    }

}


gameBoard();
