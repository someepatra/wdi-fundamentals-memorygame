
 console.log('Up and running!');
 
var cards = [
{
rank:"queen",
suits:"hearts",
cardimage:"images/queen-of-hearts.png"
},

{
rank:"queen",
suits:"diamonds",
cardimage:"images/queen-of-diamonds.png"
},

{
rank:"king",
suits:'hearts',
cardimage:"images/king-of-hearts.png"
},

{
rank:"king",
suits:'diamonds',
cardimage:"images/king-of-diamonds.png"
}

];

var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function () {
	cardId = this.getAttribute('data-id');	
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardimage);
	if(cardsInPlay.length === 2) {
		checkForMatch();
	}	
	  if (cardsInPlay.length === 4) {
  checkForMatch();
  }
    console.log("User flipped" + cards[cardId].rank);
	console.log(cards[cardId].cardimage);
	console.log(cards[cardId].suit);
	
}

var createBoard = function (){
	for (var i=0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();