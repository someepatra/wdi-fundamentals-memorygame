
 console.log('Up and running!');
 //var cards=['King','King','Queen','Queen'];

var cardsInPlay=[];
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
 

 function checkForMatch()
 {
 	if(cardsInPlay[0]===cardsInPlay[1])
 	{
 	console.log('You found a match!');
 	}
 	else
 	{
	alert('Sorry, try again.');
 	}
 }

 function flipcard(cardId)
 {
 console.log('User flipped '+" " + cards[cardId].rank);
 cardsInPlay.push(cards[cardId].rank);
 console.log(cards[cardId].cardimage);
 console.log(cards[cardId].suits);
 checkForMatch();
 if (cardsInPlay.length===1)
 {
 	
 }
}
flipcard(0);
flipcard(2);